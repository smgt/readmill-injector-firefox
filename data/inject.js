(function() {

  var Readmill = {

    button: function(url, callback, displayClass) {
      var params = [], src, iframe;

      if(displayClass === undefined) {
        displayClass = "small";
      }

      var container = document.createElement("div");

      if(callback) {
        container = callback(container);
      }

      params.push('display=' + displayClass);
      params.push('origin_domain=' + encodeURIComponent(document.domain));
      params.push('download_url=' + encodeURIComponent(url));

      src = 'https://widgets.readmill.com/send';
      src += '?' + params.join('&');

      iframe = document.createElement('iframe');
      Readmill.styleIFrame(iframe, displayClass);
      iframe.src = src;
      container.appendChild(iframe);
      return container;
    },

    appendChild: function(targets, button, insertAt) {
      var targets = document.querySelectorAll(targets);
      Array.prototype.forEach.call(targets, function(el) {
        el.parentNode.appendChild(button(el));
      });
    },

    styleIFrame: function(iframe, displayClass) {
      var style = 'margin-top: 0px; margin-right: 0px; margin-bottom: 0px; margin-left: 0px; border-top-style: none; border-right-style: none; border-bottom-style: none; border-left-style: none; position: static; left: 0px; top: 0px;',
          placeHolderUrl;
      switch(displayClass) {
        case 'small':
          style += 'width: 72px !important; height: 26px !important; ';
          placeHolderUrl = 'https://platform.readmill.com/assets/btn_ph_str_small.png';
          break;
        case 'large':
          style += 'width: 170px !important; height: 40px !important;';
          placeHolderUrl = 'https://platform.readmill.com/assets/btn_ph_str_large.png';
          break;
      }

      iframe.style.cssText = "background: transparent url(" + placeHolderUrl + ") !important; " + style;

      // Move into a function for better minimization
      function _applyAttribute(attrName, value) {
        iframe.setAttribute(attrName, value);
      }

      // NOTE Be careful about capitalization here. Internet explorer
      // does not care about attributes unless they are camel cased
      _applyAttribute('allowTransparency', 'true');  // Let transparency shine through
      _applyAttribute('frameBorder', '0');           // Hide ugly iframe border
      _applyAttribute('tabIndex', '0');              // Disable tabbing to the iframe
      _applyAttribute('scrolling', 'no');            // Disable scrolling overflowing content

      if(iframe.className) {
        iframe.className = 'send-to-readmill ' + displayClass;
      } else {
        iframe.setAttribute('class', 'send-to-readmill ' + displayClass);
      }
    }
  }

  // Feedbooks
  if(/^http:\/\/www\.feedbooks\.com\/.*/.test(document.location.href)) {

    Readmill.appendChild("a[href$='.epub'][data-role='button']", function(el) {
      return Readmill.button(el.href, function(button) {
        button.style.marginTop = "4px";
        return button;
      });
    });

    Readmill.appendChild(".buttons a[href$='.epub']", function(el) {
      return Readmill.button(el.href, function(button) {
        button.style.marginTop = "4px";
        return button;
      });
    });

  // Project Gutenberg
  } else if(/^https?:\/\/.*gutenberg\.org\//.test(document.location.href)) {
    Readmill.appendChild("a[type='application/epub+zip']", function(el) {
      return Readmill.button(el.href, function(button) {
          button.style.verticalAlign = "middle";
          button.style.marginLeft = "20px";
          button.style.display = "inline-block";
          return button;
      });
    });
  }

})();
