let inp = document.getElementById(`inp`)

inp.value = 0;

let press = (a) => {

    if (inp.value == 0) {


        inp.value = a;

    } else {


        inp.value += a;

    }


}

let res = () => {

    let inp = document.getElementById(`inp`)

    inp.value = eval(inp.value);

}

let clr = () => {

    let inp = document.getElementById(`inp`)

    inp.value = 0;

}

let del = () => {

    let del = inp.value.split("")

    del.pop()

    inp.value = del.join('')
    //    inp.value.join()
    if (inp.value == 0) {

        inp.value = 0;

    }

}