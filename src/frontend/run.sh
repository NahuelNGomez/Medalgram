#!/bin/bash

cat > "$1/env-config.js" << EOL
window._env_ = { 
	API_URL: "$API_URL"
}
EOL

exec nginx -g "daemon off;"
