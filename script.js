
function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle('light');

    const img = document.querySelector('img');

    if(html.classList.contains('light')) {
    img.setAttribute('src','./mariaAvatarLight.png');
    img.setAttribute('alt','Maria sorrindo em um evento durante o dia');
    } else {
    img.setAttribute('src','./mariaAvatarDark.png');
    img.setAttribute('alt','Maria sorrindo em um evento durante a noite');  
    }

}