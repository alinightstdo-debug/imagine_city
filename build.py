import re,json,pathlib
s=pathlib.Path('/mnt/data/script(1).js').read_text()
a=s.index('const chapters = ['); b=s.index('];',a)+2
literal=s[a+len('const chapters = '):b]
pathlib.Path('/mnt/data/imagine_city_winter/chapters.js').write_text('window.CHAPTERS = '+literal+';\n',encoding='utf8')
