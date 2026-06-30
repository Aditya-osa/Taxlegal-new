from pathlib import Path
p = Path('src/Home.css')
t = p.read_text(encoding='utf-8')
start = t.index(".tl-cta { position: relative; background-image: linear-gradient(110deg, var(--navy) 0%, var(--navy-lt) 55%, var(--red) 100%), url('data:image/jpeg;base64,")
end = t.index("');", start) + 3
old = t[start:end]
new = old.replace("background-image: linear-gradient(110deg, var(--navy) 0%, var(--navy-lt) 55%, var(--red) 100%), url('data:image/jpeg;base64,", "background-image: url('data:image/jpeg;base64,", 1)
if 'background-size' not in new:
    new = new + ' background-size: cover; background-position: center; background-repeat: no-repeat'
p.write_text(t[:start] + new + t[end:], encoding='utf-8')
print('patched')
