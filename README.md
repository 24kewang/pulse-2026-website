# Pulse 2024 Website
## Developing locally
To develop locally, you need to ensure you have node.js and an editor installed.
- Clone repo
- run `npm i` in root directory to install all dependencies
- run `npm run start` to create a local instance and see live changes to code

## Building and Deploying to cPanel
- run `npm run build` to create a build package
- go to 'build' file location, and convert to a compressed (zip) file
- go to cPanel UIUC and log in (https://web.illinois.edu:2083/?login_theme=illinois-login)
- go to 'File Manager'
- in the left side, go to 'public_html'
- select all the current files in that directory and delete them
- upload the zipped build file into this location and unzip
- make sure that the file directory path is public_html -> all the files inside of the build
    - the build folder/zip itself should not be there, so make sure to move all the other files up a directory to ensure this.
- once all files are there and in proper directory path, then the website should be live at [Pulse 2024 Website](https://pulse.ece.illinois.edu/)
  
