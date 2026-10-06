#!/bin/sh
set -eu

cat > /usr/share/nginx/html/config.js <<EOF
window.APP_CONFIG = {
  supabaseUrl: "${SUPABASE_URL:-YOUR_SUPABASE_URL}",
  supabasePublishableKey: "${SUPABASE_PUBLISHABLE_KEY:-YOUR_SUPABASE_PUBLISHABLE_KEY}"
};
EOF

exec nginx -g 'daemon off;'
