"use strict";


//Игра подготовка - "Бродилка!"

/**
 * Настройки, свойства, нет методов
 * @type {{
 * rowsCount: number,  Количество строк в карте.
 * colsCount: number, Количество столбцов в карте.
 * startPositionX: number,  Начальная позиция игрока по x координате.
 * startPositionY: number}}  Начальная позиция игрока по y координате.
*/

const settings = {
    rowsCount: 10,
    colsCount: 10,
    startPositionX: 0,
    startPositionY: 0,
};

/**
 * Объект игрока, здесь будут все методы и свойства связанные с ним
 * @property {int} x Позиция по Х-координате.
 * @property {int} y Позиция по У-координате.
 */

const player = {
    x: null,
    y: null,

    init(startX, startY) {
        this.x = startX;
        this.y = startY
    },

    move(direction){
        switch (direction) {
            case 2:
                this.y++;
                break;
            case 4:
                this.x--;
                break;
            case 6:
                this.x++;
                break;
            case 8:
                this.y--;
                break;
        }
    }
};

/**
 * Этот объект содержит всю логику игры, тоесть управлять игрой будет именно этот объект и все его методы
 */

const game = {
    settings: settings,
    player: player,

    /**
     * Запускает игру - метод run
     */

    run() {
        this.player.init(this.settings.startPositionX, this.settings.startPositionY);
        while (true) {
            this.render();

            const direction = this.getDirection();
            
            if (direction === -1) {
                alert('До свидания!');
                return;
            }

            this.player.move(direction);
        }

    },

    render() {
        let map = "";

        for (let row = 0; row < this.settings.rowsCount; row++) {
            for (let col = 0; col < this.settings.colsCount; col++) {
                if (this.player.y === row && this.player.x === col){
                    map += "0 ";
                }else {
                    map += "x ";
                }
            }
            map += "\n";
        }
        console.clear();
        console.log(map);
    },

    getDirection(){
        const availableDirections = [-1, 2, 4, 6, 8];

        while (true){
            const direction = parseInt(prompt('Введите число, куда вы хотите переместитьься!' +
                '\n -1 чтобы выйти'));
            
            if (!availableDirections.includes(direction)){
                alert(`Для перемещения используйте одно из чисел: ${availableDirections.join(', ')}`);
                continue;
            }
            return direction;
        }
    }
};

game.run();