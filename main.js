document.addEventListener('DOMContentLoaded', function() {
    let rectangles = document.querySelectorAll('.rectangle');
    for (let rectangle of rectangles) {
        let bg = document.querySelector('.modal-bg');
        let houseNumber = rectangle.id.substring(4, rectangle.id.length);
        let number = rectangle.querySelector('.number');
        let status = rectangle.dataset.status;
        let modal = document.querySelector('.modal');
        let dialog = document.querySelector('.dialog-wrapper');
        let houseStatus = modal.querySelector('.status');
        let modalStuff = document.querySelector('.modal-stuff');
        let modalStuffText = document.querySelector('.stuff-text');
        let modalStuffTitle = document.querySelector('.stuff-title');
        let arrowRec = document.querySelector('.modal .arrow');
        let arrowStuff = document.querySelector('.modal-stuff .arrow');

        let close = () => {
            let objects = [bg, modal,modalStuff,dialog];
            objects.map(item => {
                item.classList.remove('visible');
                setTimeout(() => {
                    item.style.display = 'none';
                }, 150);
            });
        }
        // Статус дома
        switch (status) {
            case 'building':
                number.style.background = '#FF9330';
                break;
            case 'renting':
                number.style.background = '#FF5139';
                break;
            case 'occupied':
                number.style.background = '#4E8E4F';
                break;
        }
        //Эффект при наведении
        let border = rectangle.querySelector('.border');
        rectangle.onmouseenter = (e) => {
            if (e.target === rectangle) {
                rectangle.classList.add('rectangle-visible');
                border.style.display = 'block';
                border.classList.add('visible-border');
                if (rectangle.querySelector('.triangle')) {
                    let triangles = rectangle.querySelectorAll('.triangle');
                    for (let triangle of triangles) {
                        triangle.classList.add('visible-triangle');
                    }
                }
                e.stopPropagation();
            }
        }
        rectangle.onmouseleave = (e) => {
            if (e.target === rectangle) {
                rectangle.classList.remove('rectangle-visible');
                border.classList.remove('visible-border');
                border.style.display = 'none';
                if (rectangle.querySelector('.triangle')) {
                    let triangles = rectangle.querySelectorAll('.triangle');
                    for (let triangle of triangles) {
                        triangle.classList.remove('visible-triangle');
                    }
                }
                e.stopPropagation();
            }
        }
        // Клики по домам
        rectangle.onclick = () => {
            if (rectangle.classList.contains('gg')) return;
            let coords = rectangle.getBoundingClientRect();
            let coordsNumber = number.getBoundingClientRect();
            document.querySelector('.upper .title').textContent ='Участок ' + houseNumber;
            if (status === 'building') {
                houseStatus.textContent = 'Строится';
            } else if (status === 'renting') {
                houseStatus.textContent = 'Сдаётся';
            } else if (status === 'occupied') {
                houseStatus.textContent = 'Сдан';
            } else {
                houseStatus.textContent = '';
            }
            if (window.innerWidth <= 460) {
                modal.style.display = 'flex';
            } else {
                modal.style.display = 'block';
            }
            if (window.innerWidth > 460) {
                if (coords.y < 380) {
                    modal.style.top = coordsNumber.y + (modal.clientHeight / 4) + 'px';
                    arrowRec.style.top = '-20px';
                    arrowRec.style.left = modal.clientWidth/2 - 15 + 'px';
                    arrowRec.style.transform = 'rotate(180deg)';
                } else {
                    modal.style.top = coordsNumber.y-(modal.clientHeight/0.9) + 'px';
                    arrowRec.style.top = modal.clientHeight + 'px';
                    arrowRec.style.left = modal.clientWidth/2 - 15 + 'px';
                    arrowRec.style.transform = 'rotate(0deg)';
                }
            } else {
                if (coords.y < 385) {
                    modal.style.top = coordsNumber.y + (modal.clientHeight / 3) + 'px';
                    arrowRec.style.top = '-20px';
                    arrowRec.style.left = modal.clientWidth/2 - 15 + 'px';
                    arrowRec.style.transform = 'rotate(180deg)';
                }
                else {
                    modal.style.top = coordsNumber.y - (modal.clientHeight/1.1) + 'px';
                    arrowRec.style.top = modal.clientHeight + 'px';
                    arrowRec.style.left = modal.clientWidth/2 - 15 + 'px';
                    arrowRec.style.transform = 'rotate(0deg)';
                }
            }
            if (coords.x < 350) {
                modal.style.left = coordsNumber.x/2 + 'px';
            } else {
                modal.style.left = coordsNumber.x - (modal.clientWidth/2) + coordsNumber.width/2  + 'px';
            }
            bg.style.display = 'block';
            setTimeout(() => {
                bg.classList.add('visible');
                modal.classList.add('visible');
            }, 150);
        }
        //Охрана
        let rec01 = document.querySelector('#rec-1');
        rec01.onclick = () => {
            let coords = rec01.getBoundingClientRect();
            modalStuffTitle.textContent = 'Охрана';
            modalStuffText.textContent = 'Собственная служба охраны круглосуточно ведет наблюдение и обеспечивает безопасность всех жителей коттеджного поселка.';
            bg.style.display = 'block';
            modalStuff.style.display = 'block';
            setTimeout(() => {
                bg.classList.add('visible');
                modalStuff.classList.add('visible');
            }, 150);
            modalStuff.style.top = coords.y - modalStuff.clientHeight/1.2 + 'px';
            modalStuff.style.left = coords.x - modalStuff.clientWidth/2.3 + 'px';
            arrowStuff.style.top = modalStuff.clientHeight + 'px';
            arrowStuff.style.left = modalStuff.clientWidth/2 - 8 + 'px';
            arrowStuff.style.transform = 'rotate(0deg)';
        }
        // Магазин
        let icon01 = document.querySelector('#icon-0-1');
        icon01.onclick = () => {
            let coords = icon01.getBoundingClientRect();
            modalStuffTitle.textContent = 'Магазин';
            modalStuffText.textContent = 'В нашем магазине вы сможете найти все необходимые для комфортного проживания товары.';
            bg.style.display = 'block';
            modalStuff.style.display = 'block';
            setTimeout(() => {
                bg.classList.add('visible');
                modalStuff.classList.add('visible');
            }, 150);
            modalStuff.style.top = coords.y - modalStuff.clientHeight + 'px';
            modalStuff.style.left = coords.x - modalStuff.clientWidth/2.3 + 'px';
            arrowStuff.style.top = modalStuff.clientHeight + 'px';
            arrowStuff.style.left = modalStuff.clientWidth/2 - 8 + 'px';
            arrowStuff.style.transform = 'rotate(0deg)';
        }
        // Баня
        let icon02 = document.querySelector('#icon-0-2');
        icon02.onclick = () => {
            let coords = icon02.getBoundingClientRect();
            modalStuffTitle.textContent = 'Баня';
            modalStuffText.textContent = 'Современная баня с возможностью регулирования температуры поможет расслабиться после тяжёлого дня.';
            bg.style.display = 'block';
            modalStuff.style.display = 'block';
            setTimeout(() => {
                bg.classList.add('visible');
                modalStuff.classList.add('visible');

            }, 150);
            modalStuff.style.top = coords.y - modalStuff.clientHeight + 'px';
            modalStuff.style.left = coords.x - modalStuff.clientWidth/2.3 + 'px';
            arrowStuff.style.top = modalStuff.clientHeight + 'px';
            arrowStuff.style.left = modalStuff.clientWidth/2 - 8 + 'px';
            arrowStuff.style.transform = 'rotate(0deg)';
        }
        // Озеро
        let lake = document.querySelector('.lake');
        lake.onclick = () => {
            let coords = lake.getBoundingClientRect();
            modalStuffTitle.textContent = 'Озеро';
            modalStuffText.textContent = 'Прозрачное озеро подходит для семейного отдыха в выходные дни.';
            bg.style.display = 'block';
            modalStuff.style.display = 'block';
            setTimeout(() => {
                bg.classList.add('visible');
                modalStuff.classList.add('visible');
            }, 150);
            modalStuff.style.top = coords.y - modalStuff.clientHeight + 'px';
            if (coords.x > 340) {
                modalStuff.style.left = coords.x - modalStuff.clientWidth/2.3 + 'px';
                arrowStuff.style.left = modalStuff.clientWidth/2 - 8 + 'px';
            } else {
                modalStuff.style.left = coords.x + 10 + 'px';
                arrowStuff.style.display = 'none';
            }
            arrowStuff.style.top = modalStuff.clientHeight + 'px';
            arrowStuff.style.transform = 'rotate(0deg)';
        }
        // Пляж
        let beach = document.querySelector('.beach');
        beach.onclick = () => {
            let coords = beach.getBoundingClientRect();
            modalStuffTitle.textContent = 'Пляж';
            modalStuffText.textContent = 'Чистый и свободный пляж';
            bg.style.display = 'block';
            modalStuff.style.display = 'block';
            setTimeout(() => {
                bg.classList.add('visible');
                modalStuff.classList.add('visible');
            }, 150);
            modalStuff.style.top = coords.y - modalStuff.clientHeight + 'px';
            modalStuff.style.left = coords.x - modalStuff.clientWidth/2.3 + 'px';
            arrowStuff.style.top = modalStuff.clientHeight + 'px';
            arrowStuff.style.left = modalStuff.clientWidth/2 - 8 + 'px';
            arrowStuff.style.transform = 'rotate(0deg)';
        }
        // Закрытие модального окна
        bg.onclick = () => {
            close();
        }
        document.querySelector('.close').onclick = () => {
            close();
        }
        let buttons = document.querySelectorAll('.btn');
        for (let button of buttons) {
            button.onclick = () => {
                modalStuff.style.display = 'none';
                modal.style.display = 'none';
                dialog.style.display = 'block';
                setTimeout(() => {
                    dialog.classList.add('visible');
                });
            }
        }
    }
});