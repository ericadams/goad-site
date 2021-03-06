import React from 'react';
import ReactDOM from 'react-dom';
import Downloads from './components/downloads.jsx';
var smoothScroll = require('smoothscroll');

function ready(fn) {
  if (document.readyState != 'loading'){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

window.React = React;
window.ReactDOM = ReactDOM;

const binaries = [
  {
    os: "macOS",
    architecture: 64,
    url: "https://github.com/gophergala2016/goad/releases/download/v1.3.0/goad-gopher-gala-osx-x86-64.zip"
  },
  {
    os: "Linux",
    architecture: 32,
    url: "https://github.com/gophergala2016/goad/releases/download/v1.3.0/goad-gopher-gala-linux-x86.zip"
  },
  {
    os: "Linux",
    architecture: 64,
    url: "https://github.com/gophergala2016/goad/releases/download/v1.3.0/goad-gopher-gala-linux-x86-64.zip"
  },
  {
    os: "Windows",
    architecture: 32,
    url: "https://github.com/gophergala2016/goad/releases/download/v1.3.0/goad-gopher-gala-windows-x86.zip"
  },
  {
    os: "Windows",
    architecture: 64,
    url: "https://github.com/gophergala2016/goad/releases/download/v1.3.0/goad-gopher-gala-windows-x86-64.zip"
  },
];

ReactDOM.render(<Downloads binaries={binaries} />, document.getElementById("downloads"));

ready(function(){
  var tryEl = document.getElementById("try-link");
  var tryDestination = document.getElementById("demo");

  tryEl.addEventListener("click", event => {
    event.preventDefault()
    smoothScroll(tryDestination)
  })

  var installEl = document.getElementById("install-link");
  var installDestination = document.getElementById("install");

  installEl.addEventListener("click", event => {
    event.preventDefault()
    smoothScroll(installDestination)
  })
})
