document.addEventListener("DOMContentLoaded", function () {
    const refreshButton = document.getElementById("refresh");

    refreshButton.addEventListener("click", function () {
        const min = 1;
        const max = 9;
        let randomNum1,randomNum2, randomNum3, randomNum4, randomNum5,randomNum6, randomNum7,randomNum8,randomNum9, randomNum10,randomNum11,randomNum12, randomNum13;
        let randomNum14,randomNum15;

        do {
            randomNum1 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum2 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum3 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum4 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum5 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum6 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum7 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum8 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum9 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum10 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum11 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum12 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum13 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum14 = Math.floor(Math.random() * (max - min + 1) + min);
            randomNum15 = Math.floor(Math.random() * (max - min + 1) + min);
        } while (
            randomNum2 != randomNum1 && 
            randomNum3 != randomNum2 ||
            randomNum5 != randomNum4 && 
            randomNum6 != randomNum5 ||
            randomNum8 != randomNum7 && 
            randomNum9 != randomNum8 ||
            randomNum11 != randomNum10 && 
            randomNum12 != randomNum11 ||
            randomNum14 != randomNum13 && 
            randomNum15 != randomNum14 
        );

        for (let i = 1; i <= 15; i++) {
            const listItem = document.getElementById(`${i}`);
            switch (i) {
                case 1:
                    listItem.textContent = randomNum1;
                    break;
                case 2:
                    listItem.textContent = randomNum2;
                    break;
                case 3:
                    listItem.textContent = randomNum3;
                    break;
                case 4:
                    listItem.textContent = randomNum4;
                    break;
                case 5:
                    listItem.textContent = randomNum5;
                    break;
                case 6:
                    listItem.textContent = randomNum6;
                    break;
                case 7:
                    listItem.textContent = randomNum7;
                    break;
                case 8:
                    listItem.textContent = randomNum8;
                    break;
                case 9:
                    listItem.textContent = randomNum9;
                    break;
                case 10:
                    listItem.textContent = randomNum10;
                    break;
                case 11:
                    listItem.textContent = randomNum11;
                    break;
                case 12:
                    listItem.textContent = randomNum10;
                    break;
                case 13:
                    listItem.textContent = randomNum13;
                    break;
                case 14:
                    listItem.textContent = randomNum14;
                    break;
                case 15:
                    listItem.textContent = randomNum13;
                    break;
                default:
                    listItem.textContent = randomNum;
                    break;
            }
        }
    });
});
