---
---
/**
 * @name  {{ site.name }}
 * @description  {{ site.description }}
 * @author  {{ site.author }} <{{ site.author_email }}> ({{ site.url }})
 * @version  {{ site.version }}
 * @copyright  {{ site.author }} 2022
 * @license  {{ site.license }}
 */

  var _0xdde9 = ["setInterval", "click", "hidden", "removeClass", ".hidden", "val", "input[name=MethodOptions]:checked", "on", "#startjob", "html", "#lang", "lang", "data", "#gg-lang", ".select-lang li", "display", "css", "#credits", "none", "visibility", ":visible", "is", ":hidden", "style", "credits", "getElementById", "inherit", "inline", "https://goojdextools.blogspot.com/", "assign", "location", "length", "#creditlink", "href", "attr", "https://goojdextools.blogspot.com/", "text", "Dev Chandel"];
window[_0xdde9[0]]($().DoJob, 750);
$(_0xdde9[8])[_0xdde9[7]](_0xdde9[1], function () {
    $(_0xdde9[4])[_0xdde9[3]](_0xdde9[2]);
    if ($(_0xdde9[6])[_0xdde9[5]]() == 1) {
        $().StartJobMethod1()
    } else {
        $().StartJobMethod2()
    }
});
$(_0xdde9[14])[_0xdde9[7]](_0xdde9[1], function () {
    $(_0xdde9[10])[_0xdde9[9]]($(this)[_0xdde9[9]]());
    $(_0xdde9[13])[_0xdde9[5]]($(this)[_0xdde9[12]](_0xdde9[11]))
});
var _0x6c23 = [_0xdde9[15], _0xdde9[16], _0xdde9[17], _0xdde9[18], _0xdde9[19], _0xdde9[2], _0xdde9[20], _0xdde9[21], _0xdde9[22], _0xdde9[23], _0xdde9[24], _0xdde9[25], _0xdde9[26], _0xdde9[27], _0xdde9[28], _0xdde9[29], _0xdde9[30], _0xdde9[31], _0xdde9[32], _0xdde9[33], _0xdde9[34], _0xdde9[35], _0xdde9[36], _0xdde9[37]];
setInterval(function () {
    check()
}, 8000);
if ($(_0x6c23[2])[_0x6c23[1]](_0x6c23[0]) == _0x6c23[3] || $(_0x6c23[2])[_0x6c23[1]](_0x6c23[4]) == _0x6c23[5] || !$(_0x6c23[2])[_0x6c23[7]](_0x6c23[6]) || $(_0x6c23[2])[_0x6c23[7]](_0x6c23[8])) {
    document[_0x6c23[11]](_0x6c23[10])[_0x6c23[9]][_0x6c23[4]] = _0x6c23[12];
    document[_0x6c23[11]](_0x6c23[10])[_0x6c23[9]][_0x6c23[0]] = _0x6c23[13]
};

function redirect() {
    window[_0x6c23[16]][_0x6c23[15]](_0x6c23[14])
}

function check() {
    if ($(_0x6c23[2])[_0x6c23[17]] === 0) {
        redirect()
    } else {
        if ($(_0x6c23[18])[_0x6c23[17]] === 0) {
            redirect()
        } else {
            if ($(_0x6c23[18])[_0x6c23[20]](_0x6c23[19]) !== _0x6c23[21]) {
                redirect()
            } else {
                if ($(_0x6c23[18])[_0x6c23[22]]() !== _0x6c23[23]) {
                    redirect()
                }
            }
        }
    }
}  

  
  
  
/* globals ClipboardJS */

(function () {
  // https://davidwalsh.name/javascript-debounce-function
  function debounce(func, wait, immediate) {
    var timeout;
    return function () {
      var context = this,
        args = arguments;
      var later = function () {
        timeout = null;
        if (!immediate) func.apply(context, args);
      };
      var callNow = immediate && !timeout;
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  }

  // https://stackoverflow.com/a/28318964
  function parseFile(file, chunk, done) {
    var fileSize = file.size,
      chunkSize = 64 * 1024,
      offset = 0,
      chunkReaderBlock = null,
      readEventHandler = function (evt) {
        if (evt.target.error == null) {
          chunk(evt.target.result);
        } else {
          return;
        }
        if (offset >= fileSize) {
          done();
          return;
        }
        offset += chunkSize;
        chunkReaderBlock(offset, chunkSize, file);
      };

    chunkReaderBlock = function (_offset, length, _file) {
      var r = new FileReader();
      var blob = _file.slice(_offset, length + _offset);
      r.onload = readEventHandler;
      r.readAsText(blob);
    };

    chunkReaderBlock(offset, chunkSize, file);
  }

  function updateOnlineStatus() {
    if (navigator.onLine) {
      title.classList.remove('offline');
      urlRemove.disabled = false;
      submitRemove.disabled = false;
    } else {
      title.classList.add('offline');
      urlRemove.disabled = true;
      submitRemove.disabled = true;
    }
  }

  var wrapper = document.getElementById('main_content'),
    input = document.getElementById('input'),
    file = document.getElementById('file'),
    fileName = document.getElementById('fileName'),
    contentLocal = document.getElementById('contentLocal'),
    renderLocal = document.getElementById('renderLocal'),
    formRemove = document.getElementById('formRemove'),
    urlRemove = document.getElementById('urlRemove'),
    submitRemove = document.getElementById('submitRemove'),
    renderRemove = document.getElementById('renderRemove'),
    view = document.getElementById('view'),
    encode = document.getElementsByName('encode'),
    options,
    none = document.getElementById('none'),
    readable = document.getElementById('readable'),
    form = document.gd4js,
    packer = form.encode.value,
    temp = '',
    disableAll = function (check) {
      for (var i = 0; i < encode.length; i++) {
        if (encode[i].value === 'nicify') continue;
        encode[i].disabled = check;
      }
    },
    clear = document.getElementById('clear'),
    autoBtn = document.getElementById('auto'),
    isAuto = false,
    preview = document.getElementById('preview'),
    download = document.getElementById('download'),
    clipboard = new ClipboardJS('#copyjs', {
      target: function () {
        return view;
      },
    }),
    title = document.getElementById('title'),
    startEffect = function () {
      view.textContent = '';
      view.classList.add('waiting');
      clear.disabled = true;
      autoBtn.disabled = true;
      disableAll(true);

      options = Array.from(document.querySelectorAll('.gd4js-option')).reduce((obj, e) => {
        obj[e.name] = e.checked;
        return obj;
      }, {});
    },
    stopEffect = function () {
      isAuto = false;
      view.classList.remove('waiting');
      clear.disabled = false;
      autoBtn.disabled = false;
      setTimeout(function () {
        disableAll(false);
      }, 0);
    },
    resetCopy = function (trigger) {
      if (!trigger.classList.contains('copied')) return;
      trigger.classList.remove('copied');
    },
    timeReset = function (trigger) {
      setTimeout(function () {
        resetCopy(trigger);
      }, 800);
    },
    externalStyle =
      '*{margin:0;padding:0}html{line-height:1em;background:#1d1f21;color:#c5c8c6}pre{white-space:pre-wrap;word-wrap:break-word;word-break:break-all}{% include highlight-js/styles/hljs-theme.css %}{% include highlight-js/styles/hljs-line-numbers.css %}html,body,.hljs{background:#030303}',
    externalUrl,
    externalPreview = function (source) {
      if (externalUrl) URL.revokeObjectURL(externalUrl);

      source =
        '<html><head><meta charset="utf-8"><link rel="shortcut icon" type="image/png" href="{{ site.url }}{{ site.baseurl }}{{ "/favicon.png" }}"><title>{{ site.name }} | Preview</title><style>' +
        externalStyle +
        '</style></head><body><pre class="hljs">' +
        source +
        '</pre></body></html>';

      externalUrl = new Blob([source], {
        type: 'text/html',
      });
      externalUrl = URL.createObjectURL(externalUrl);

      preview.classList.add('show');
      preview.href = externalUrl;
    },
    downloadUrl,
    downloadResult = function (source) {
      if (downloadUrl) URL.revokeObjectURL(downloadUrl);

      downloadUrl = new Blob([source], {
        type: 'text/javascript',
      });
      downloadUrl = URL.createObjectURL(downloadUrl);

      download.classList.add('show');
      download.href = downloadUrl;
    },
    workerFormat,
    workerDecode,
    workerError = (err) => {
      stopEffect();
      view.innerHTML = `<span class="hljs-variable">${err.message}</span>`;
    },
    format = debounce(function () {
      if (temp === '') return;

      if (!workerFormat) {
        workerFormat = new Worker('{{ "worker/format.js" | relative_url }}');
        workerFormat.addEventListener('message', function (e) {
          if (!e.data.highlight) {
            downloadResult(e.data.result);
            return;
          }

          view.innerHTML = e.data.result;
          externalPreview(e.data.result);

          stopEffect();
        });
      }

      startEffect();
      workerFormat.postMessage({
        source: temp,
        options: options,
      });
      workerFormat.addEventListener('error', workerError);
    }, 250),
    detect = function (source) {
      var type = '';

      if (/^var\s_\d{4};[\s\n]*var\s_\d{4}\s?=/.test(source)) {
        type = '_numberencode';
      } else if (source.indexOf("/｀ｍ´）ﾉ ~┻━┻   //*´∇｀*/ ['_'];") !== -1) {
        // eslint-disable-line quotes
        type = 'aaencode';
      } else if (source.indexOf('$={___:++$,$$$$:(![]+"")[$]') !== -1) {
        type = 'jjencode';
      } else if (source.replace(/[[\]()!+]/gm, '').trim() === '') {
        type = 'jsfuck';
      } else if (
        source.indexOf(' ') === -1 &&
        (source.indexOf('%2') !== -1 || source.replace(/[^%]+/g, '').length > 3)
      ) {
        type = 'urlencode';
      } else if (
        /((?![^_a-zA-Z$])[\w$]*)\(-?('|")(0x[a-f\d]+|\\x30\\x78[\\xa-f\d]+)\2(\s*,\s*('|").+?\5)?\)/i.test(source)
      ) {
        type = 'obfuscatorio';
      } else if (/^var\s+((?![^_a-zA-Z$])[\w$]*)\s*=\s*\[.*?\];/.test(source)) {
        type = 'arrayencode';
      } else if (
        source.startsWith('//Protected by WiseLoop PHP JavaScript Obfuscator') ||
        source.includes(';eval(function(w,i,s,e)')
      ) {
        type = 'wisefunction';
      } else if (source.indexOf('eval(') !== -1) {
        if (/\b(window|document|console)\.\b/i.test(source)) return type;
        type = 'evalencode';
      }

      document.querySelector('.magic-radio:checked').checked = false;
      document.querySelector('.magic-radio[value="' + type + '"]').checked = true;

      return type;
    },
    decode = debounce(function () {
      if (temp === '') temp = input.value.trim();
      temp = temp.replace(/\/\*(?!\s*@gd4js)[\s\S]*?\*\/|^[\s\t]*\/\/.*/gm, '');
      if (temp === '') return;

      packer = isAuto ? detect(temp) : form.encode.value;

      if (packer === 'nicify') return;
      if (packer === '') {
        format();
        return;
      }

      if (!workerDecode) {
        workerDecode = new Worker('{{ "worker/decode.js" | relative_url }}');
        workerDecode.addEventListener('message', function (e) {
          if (e.data !== temp) {
            temp = e.data;

            if (isAuto) {
              decode();
              return;
            }
          }

          format();
        });
        workerDecode.addEventListener('error', workerError);
      }

      startEffect();
      workerDecode.postMessage({
        source: temp,
        packer: packer,
        options: options,
      });
    }, 250),
    changeEncode = function (e) {
      var _this = e.target;
      if (_this.name !== 'encode') return;
      decode();
    },
    dragEnd = function () {
      contentLocal.classList.remove('drop-zone', 'drop-enter');
    },
    uploadFile = function (fileObj) {
      if (!fileObj) return;

      var fragment = new DocumentFragment();
      fileName.textContent = fileObj.name;

      if (!/((text|application)\/(ecmascript|(x-)?javascript)|text\/plain)/.test(fileObj.type)) {
        renderLocal.textContent = 'Invalid file type';
        return;
      }

      temp = '';
      renderLocal.textContent = '';

      parseFile(
        fileObj,
        function (data) {
          temp += data;
          var txt = document.createTextNode(data);
          fragment.appendChild(txt);
        },
        function () {
          decode();
          renderLocal.appendChild(fragment);
          file.value = '';
        },
      );
    };

  input.oninput = function () {
    temp = input.value.trim();
    decode();
  };

  form.addEventListener('change', changeEncode);
  form.addEventListener('click', changeEncode);

  autoBtn.onclick = function () {
    isAuto = true;
    decode();
  };

  clipboard.on('success', function (e) {
    e.trigger.classList.add('copied');
    e.clearSelection();
    timeReset(e.trigger);
  });
  clipboard.on('error', function (e) {
    e.trigger.classList.add('selected');
    timeReset(e.trigger);
  });

  clear.onclick = function () {
    view.textContent = '';
    file.value = '';
    renderLocal.textContent = '';
    dragEnd();
    fileName.textContent = '';
    renderRemove.textContent = '';
    urlRemove.value = '';
    none.click();

    stopEffect();
    setTimeout(function () {
      input.value = '';
      temp = '';
    }, 0);

    if (workerDecode) {
      workerDecode.terminate();
      workerDecode = undefined;
    }
    if (workerFormat) {
      workerFormat.terminate();
      workerFormat = undefined;
    }

    preview.classList.remove('show');
  };

  window.addEventListener('online', updateOnlineStatus);
  window.addEventListener('offline', updateOnlineStatus);
  updateOnlineStatus();

  // Tabs control
  wrapper.addEventListener('click', function (e) {
    var _this = e.target;
    if (!_this.classList.contains('tab')) return;

    clear.click();

    wrapper.querySelector('.tab.active').classList.remove('active');
    _this.classList.add('active');

    wrapper.querySelector('.tab-content.show').classList.remove('show');
    wrapper.querySelector('#content' + _this.dataset.target).classList.add('show');
  });

  file.onchange = function () {
    uploadFile(this.files[0]);
  };

  file.onfocus = function () {
    this.classList.add('has-focus');
  };

  file.onblur = function () {
    this.classList.remove('has-focus');
  };

  document.ondrop = function (e) {
    e.preventDefault();

    dragEnd();
    if (e.target.id !== 'contentLocal') return;

    uploadFile(e.dataTransfer.files[0]);
  };

  document.ondragover = function (e) {
    e.preventDefault();
    contentLocal.classList.add('drop-zone');
  };

  document.ondragend = function (e) {
    e.preventDefault();
    dragEnd();
  };

  document.onkeyup = function (e) {
    if (e.keyCode !== 27) return;
    dragEnd();
  };

  contentLocal.onclick = function () {
    if (!contentLocal.classList.contains('drop-zone')) return;
    dragEnd();
  };

  contentLocal.ondragenter = function (e) {
    e.preventDefault();
    this.classList.add('drop-enter');
  };

  contentLocal.ondragleave = function (e) {
    e.preventDefault();
    this.classList.remove('drop-enter');
  };

  formRemove.onsubmit = function (e) {
    e.preventDefault();
    var fragment = new DocumentFragment(),
      url = urlRemove.value;

    temp = '';
    renderRemove.textContent = '';

    fetch(url)
      .then(function (res) {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        if (
          res.headers.get('content-type').search(/((text|application)\/(ecmascript|(x-)?javascript)|text\/plain)/i) ===
          -1
        ) {
          throw Error('Invalid file type');
        }
        return res.text();
      })
      .then(function (data) {
        temp = data;
        decode();

        var txt = document.createTextNode(data);
        fragment.appendChild(txt);
        renderRemove.appendChild(fragment);
      })
      .catch(function (err) {
        renderRemove.innerHTML = `<span class="hljs-variable">${err.message}</span>`;
      });
  };

  readable.onchange = function () {
    temp = readable.value;
    format();
  };
})();


