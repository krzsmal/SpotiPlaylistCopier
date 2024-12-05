# SpotiPlaylistCopier
**SpotiPlaylistCopier** is a JavaScript script that automates the process of copying songs from one Spotify playlist to another. It's a convenient tool for moving large numbers of songs without manual effort. 
The newly created playlist, where all songs will be copied, will have the same name as the first song from the source playlist.

## Features
- Automatically copies songs between Spotify playlists.
- Handles dynamic scrolling and loading of additional songs.
- Configurable via XPath for easy customization.

## Requirements
- A web browser with Developer Tools (e.g., Google Chrome).

## Usage
1. Open Spotify in your web browser and log in to your account.
2. Navigate to the playlist you want to copy songs from.
3. Open **Developer Tools** (Ctrl + Shift + I / F12).
4. In the **Console** tab, paste the `SpotiPlaylistCopier.js` code and press **Enter**.
5. The script will automatically start copying songs.
6. Wait for the script to finish and display a message indicating that the process is complete.
7. Go to the newly created playlist and rename it as desired.

## Limitations
The script relies on Spotify's UI, so changes to the website's structure may require updates to the XPath.

## Disclaimer
Use this script at your own risk. Spotify may restrict access to your account if actions violate their Terms of Service.

## License
This project is open-source under the MIT License.
