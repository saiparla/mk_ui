function initSidebarHoverAndActive() {
    const sidebarItems = document.querySelectorAll('.desk-sidebar-item.standard-sidebar-item');

    const defaultSelected = document.querySelector('.desk-sidebar-item.standard-sidebar-item.selected');
    if (defaultSelected) {
        applySelectedStyles(defaultSelected);
    }

    sidebarItems.forEach(item => {
        item.style.transition = '0.2s';
        item.style.height = '30px';


        item.addEventListener('mouseover', function () {
            if (!this.classList.contains('selected')) {
                applyHoverStyles(this);
            }
        });

        item.addEventListener('mouseout', function () {
            if (!this.classList.contains('selected')) {
                clearStyles(this);
            }
        });

        item.addEventListener('click', function () {

            sidebarItems.forEach(i => {
                i.classList.remove('selected');
                clearStyles(i);
            });

            this.classList.add('selected');
            applySelectedStyles(this);
        });
    });
}



function applyHoverStyles(selected) {
    // selected.style.backgroundColor = '#9563388c';
    selected.style.backgroundColor = '#ffff';
    // selected.style.marginLeft = '15px';
    selected.style.transform = 'scale(1)translateX(10px)';
    // selected.style.color = '#ffffff';
    selected.style.borderRadius = '4px';
    selected.style.boxShadow = '0px 0px 5px #888';


    // const label = selected.querySelector('.sidebar-item-label');
    // if (label) label.style.color = '#ffffff';

    // const iconSvg = selected.querySelector('.sidebar-item-icon svg');
    // if (iconSvg) {
    //     iconSvg.style.fill = '#ffffff';
    //     iconSvg.style.color = '#ffffff';
    // }
}

function applySelectedStyles(selected) {
    // selected.style.backgroundColor = '#956438';
    selected.style.backgroundColor = '#fff';
    // selected.style.color = '#ffffff';
    // selected.style.marginLeft = '15px';
    selected.style.transform = 'scale(1) translateX(13px)';

    selected.style.boxShadow = '0px 0px 5px #888';
    selected.style.borderRadius = '5px';
    // const label = selected.querySelector('.sidebar-item-label');
    // if (label) label.style.color = '#ffffff';

    // const iconSvg = selected.querySelector('.sidebar-item-icon svg');
    // if (iconSvg) {
    //     iconSvg.style.fill = '#ffffff';
    //     iconSvg.style.color = '#ffffff';
    // }
}

function clearStyles(selected) {
    selected.style.backgroundColor = 'transparent';
    selected.style.color = '383838';
    selected.style.boxShadow = 'none';
    selected.style.borderRadius = 'none';
    selected.style.marginLeft = '0px';
    selected.style.transform = 'scale(1) translateX(0px)'


    const label = selected.querySelector('.sidebar-item-label');
    if (label) label.style.color = '#383838';

    const iconSvg = selected.querySelector('.sidebar-item-icon svg');
    if (iconSvg) {
        iconSvg.style.fill = 'none';
        iconSvg.style.color = '#1b1b1be3';
    }
}


setTimeout(() => {
    initSidebarHoverAndActive();
}, 800);


document.addEventListener("DOMContentLoaded", initSidebarHoverAndActive);

const desksidebarobserver = new MutationObserver(initSidebarHoverAndActive);
desksidebarobserver.observe(document.body, {
    childList: true,
    subtree: true
});

