console.log('hello2');

class Widget {

    constructor(private element: HTMLElement) {
        console.log('hello widget');
        this.render();
    }

    public render() {
        this.element.innerHTML = `<canvas width="500px" height="500px" style="width:500px;height:500px; border: solid 1px black"></canvas>`;
    }
}

document.querySelectorAll('w-rope-simulation').forEach((element: HTMLElement) => new Widget(element));
