npm install
# check if config.json exists and if not, run npm setup
if [ -e config.json ]; then
    echo "found config.json"
  else
    npm run setup
fi
npm start
