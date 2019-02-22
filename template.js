module.exports = {
  content: ({ port }) => {
    return `RewriteEngine On
DirectoryIndex disabled
RewriteCond %{HTTP:Upgrade} websocket [NC]
RewriteCond %{QUERY_STRING} transport=websocket [NC]
RewriteRule ^(.*) ws://127.0.0.1:${port}/$1 [P]
RewriteRule ^(.*) http://127.0.0.1:${port}/$1 [P]
RewriteRule ^(.*) https://127.0.0.1:${port}/$1 [P]`
  }
}
