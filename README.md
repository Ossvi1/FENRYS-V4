<p align="center">
  <img src="https://readme-typing-svg.herokuapp.com/?font=Creepster&size=40&pause=1000&color=FF00FF&center=true&vCenter=true&width=600&lines=🜛+𝙁𝙀𝙉𝙍𝙔𝙎+𝙑𝟰+🜛;۞+@ossvi+۞;">
</p>

<h1 align="center">
<p>
<img src="https://xatimg.com/image/TyANiC68n4eZ.jpg" alt="𝙁𝙀𝙉𝙍𝙔𝙎 𝙑𝟰" width="720">
</p>

<p align="center">
<a href="#"><img title="BOT-MULTI-DEVICE" src="https://img.shields.io/badge/BOT•MULTI•DEVICE-blue?&style=for-the-badge"></a>
</p>

<p align="center">
<img title="Autor" src="https://img.shields.io/badge/Autor-ossvi-orange.svg?style=for-the-badge&logo=github">
<img title="Versão" src="https://img.shields.io/badge/Versão-4.0.0-orange.svg?style=for-the-badge&logo=github">
</p>

## Instalação Via Termux  <img src="https://user-images.githubusercontent.com/2052725/6568419a-6a9f-490a-85ea-90b94af694fe.png" height="25px">

```bash
# 1° Comando: Atualizar e preparar el entorno
apt-get update -y && pkg upgrade -y && pkg update -y \
&& pkg install nodejs -y && pkg install nodejs-lts -y \
&& pkg install ffmpeg -y && pkg install wget -y \
&& pkg install tesseract -y && pkg install git -y

# ATENÇÃO: Será necessário digitar 'y' toda vez que pida [y/n]

# 2° Comando: Dar acceso a almacenamiento
termux-setup-storage

# 3° Comando: Clonar el repositorio OSSVI
cd /storage/emulated/0/Download && git clone https://github.com/Ossvi1/FENRYS-V4.git

# 4° Comando: Instalar dependencias y arrancar
cd /storage/emulated/0/Download/FENRYS-V4 && npm install && npm start

"# FENRYS-V4" 
