// just wrapper to pivot.table
print('<!DOCTYPE html>'
+ "\n" + '<html>'
+ "\n" + '<head>'
+ "\n" + '<title>' + req.table + '</title>'
+ "\n" + '<meta charset="utf-8"/>'
+ "\n" + '<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />'
+ "\n" + '<meta name="robots" content="noindex, nofollow">'
+ "\n" + '<style type="text/css">'
+ "\n" + '* { font-family: "Trebutech MS", Verana, Arial, sans-serif; }'
+ "\n" + 'table { border-collapse: collapse; }'
+ "\n" + 'td, th { padding: 2px 4px; border: 1px solid #e5e5e5; }'
+ "\n" + 'th { text-align: right }'
+ "\n" + 'td { text-align: left }'
+ "\n" + 'tr:hover, thead tr { background-color: rgb(245,245,245); }'
+ "\n" + '.null { color: #eee; font-style: italic; }'
+ "\n" + '.str { text-align: left }'
+ "\n" + '.date .time .datetime { white-space: nowrap }'
+ "\n" + '.bool { font-style: italic }'
+ "\n" + '</style>'
+ "\n" + '</head>'
+ "\n" + '<body>');

print( await result.format("pivot.table") );

print(   '</body>'
+ "\n" + '</html>');

