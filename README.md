# Site Feira - ODS 13

O site continua sendo uma pagina unica, mas agora o codigo esta separado por modulos em `src/`.

Para abrir localmente, use um servidor estatico na pasta do projeto:

powershell
py -m http.server 8000 --bind 127.0.0.1


Depois acesse:

http://127.0.0.1:8000/

Nao abra diretamente pelo `file://`, porque o `index.html` carrega fragments HTML internos com `fetch`.

*Ou utilize o iniciar.bat