let S_L = ["", "", "", "", "", "", "", "", ""]; //S_L = Symbol List

let Symbol = false;

let Clicked = 0;
function WIN() {
  if (
    (S_L[0] == "X" && S_L[1] == "X" && S_L[2] == "X") ||
    (S_L[3] == "X" && S_L[4] == "X" && S_L[5] == "X") ||
    (S_L[6] == "X" && S_L[7] == "X" && S_L[8] == "X") ||
    (S_L[0] == "X" && S_L[4] == "X" && S_L[8] == "X") ||
    (S_L[2] == "X" && S_L[4] == "X" && S_L[6] == "X") ||
    (S_L[2] == "X" && S_L[5] == "X" && S_L[8] == "X") ||
    (S_L[0] == "X" && S_L[3] == "X" && S_L[6] == "X") ||
    (S_L[1] == "X" && S_L[4] == "X" && S_L[7] == "X")
  ) {
    document.getElementById("win").innerHTML = "🎈✨ Player X is Winner ✨🎈";
  } else if (
    (S_L[0] == "O" && S_L[1] == "O" && S_L[2] == "O") ||
    (S_L[3] == "O" && S_L[4] == "O" && S_L[5] == "O") ||
    (S_L[6] == "O" && S_L[7] == "O" && S_L[8] == "O") ||
    (S_L[0] == "O" && S_L[4] == "O" && S_L[8] == "O") ||
    (S_L[2] == "O" && S_L[4] == "O" && S_L[6] == "O") ||
    (S_L[2] == "O" && S_L[5] == "O" && S_L[8] == "O") ||
    (S_L[0] == "O" && S_L[3] == "O" && S_L[6] == "O") ||
    (S_L[1] == "O" && S_L[4] == "O" && S_L[7] == "O")
  ) {
    document.getElementById("win").innerHTML = "🎈✨ Player O is Winner ✨🎈";
  } else {
    Die();
  }
}

function checkbox1() {
  Symbol = "X";
  document.getElementById("ch2").disabled = true;
}

function checkbox2() {
  Symbol = "O";
  document.getElementById("ch1").disabled = true;
}
function Symbol_change(Symbol) {
  if (Symbol == "X") {
    return "O";
  } else {
    return "X";
  }
}

function my1() {
  if (Symbol) {
    const val = (document.getElementById("v1").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[0] = val;
    Clicked += 1;
    WIN();
    document.getElementById("v1").disabled = true;
  }
}
function my2() {
  if (Symbol) {
    const val = (document.getElementById("v2").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[1] = val;
    Clicked += 1;
    WIN();

    document.getElementById("v2").disabled = true;
  }
}
function my3() {
  if (Symbol) {
    const val = (document.getElementById("v3").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[2] = val;
    Clicked += 1;
    WIN();

    document.getElementById("v3").disabled = true;
  }
}
function my4() {
  if (Symbol) {
    const val = (document.getElementById("v4").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[3] = val;
    Clicked += 1;
    WIN();

    document.getElementById("v4").disabled = true;
  }
}
function my5() {
  if (Symbol) {
    const val = (document.getElementById("v5").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[4] = val;
    Clicked += 1;
    WIN();

    //Die();
    document.getElementById("v5").disabled = true;
  }
}
function my6() {
  if (Symbol) {
    const val = (document.getElementById("v6").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[5] = val;
    Clicked += 1;
    WIN();

    //Die();
    document.getElementById("v6").disabled = true;
  }
}
function my7() {
  if (Symbol) {
    const val = (document.getElementById("v7").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[6] = val;
    Clicked += 1;
    WIN();
    //Die();
    document.getElementById("v7").disabled = true;
  }
}
function my8() {
  if (Symbol) {
    const val = (document.getElementById("v8").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[7] = val;
    Clicked += 1;
    WIN();

    //Die();
    document.getElementById("v8").disabled = true;
  }
}
function my9() {
  if (Symbol) {
    const val = (document.getElementById("v9").value = Symbol);
    Symbol = Symbol_change(Symbol);
    S_L[8] = val;
    Clicked += 1;
    WIN();

    //Die();
    document.getElementById("v9").disabled = true;
  }
}

function Die() {
  if (Clicked == 9) {
    document.getElementById("win").innerHTML = "Match Die";
  }
}
