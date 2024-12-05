const start = performance.now();
const mouseOverEvent = new MouseEvent('mouseover', {
    bubbles: true,
    cancelable: true,
    view: window
});

async function waitForElement(xpath, context, time) {
    return new Promise((resolve) => {
        const checkExist = () => {
            const element = document.evaluate(xpath, context, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
            if (element) {
                resolve(element);
            } else {
                setTimeout(checkExist, time);
            }
        };
        checkExist();
    });
}

async function addSongToPlaylist(button, counter) {
    button.click();
    let addPlaylistBtn = await waitForElement('//*[@data-testid="context-menu"]//li[1]/button', document, 10);
    addPlaylistBtn.dispatchEvent(mouseOverEvent);
    let time = (counter > 10) ? 50 : 500;
    let selectPlaylistBtn = await waitForElement((counter == 1) ? './../div//li[2]/button' : './../div//li[3]/button', addPlaylistBtn, time);
    selectPlaylistBtn.click();
}

const songContainer = document.evaluate('//*[@id="main"]/div/div[2]/div[4]/div[1]/div[2]/div[2]/div/main/section/div[2]/div[3]', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
let currentSong = document.evaluate('.//button[@data-testid="more-button"]', songContainer, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
let counter = 1;
await addSongToPlaylist(currentSong, counter);
await new Promise(resolve => setTimeout(resolve, 1000));
currentSong = document.evaluate('./../../../following-sibling::div//button[@data-testid="more-button"]', currentSong, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
let batchSize = 50;

while (currentSong != null) {
    counter++;
    currentSong.scrollIntoView({ behavior: 'smooth', block: 'start' });
    await addSongToPlaylist(currentSong, counter);
    currentSong = document.evaluate('./../../../following-sibling::div//button[@data-testid="more-button"]', currentSong, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    if (counter % batchSize === 0) {
        await new Promise(resolve => setTimeout(resolve, 5000));
    }
}

let end = performance.now();
console.log(`Copied ${counter} songs in ${((end - start) / 1000).toFixed(2)} seconds`);
