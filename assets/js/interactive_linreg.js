(function() {
    var fn = function() {
      
      (function(root) {
        function now() {
          return new Date();
        }
      
        var force = false;
      
        if (typeof root._bokeh_onload_callbacks === "undefined" || force === true) {
          root._bokeh_onload_callbacks = [];
          root._bokeh_is_loading = undefined;
        }
      
        
        
      
        var element = document.getElementById("103e678b-566f-4c2a-873b-4ce43171e49a");
          if (element == null) {
            console.warn("Bokeh: autoload.js configured with elementid '103e678b-566f-4c2a-873b-4ce43171e49a' but no matching script tag was found.")
          }
        
      
        function run_callbacks() {
          try {
            root._bokeh_onload_callbacks.forEach(function(callback) {
              if (callback != null)
                callback();
            });
          } finally {
            delete root._bokeh_onload_callbacks
          }
          console.debug("Bokeh: all callbacks have finished");
        }
      
        function load_libs(css_urls, js_urls, callback) {
          if (css_urls == null) css_urls = [];
          if (js_urls == null) js_urls = [];
      
          root._bokeh_onload_callbacks.push(callback);
          if (root._bokeh_is_loading > 0) {
            console.debug("Bokeh: BokehJS is being loaded, scheduling callback at", now());
            return null;
          }
          if (js_urls == null || js_urls.length === 0) {
            run_callbacks();
            return null;
          }
          console.debug("Bokeh: BokehJS not loaded, scheduling load and callback at", now());
          root._bokeh_is_loading = css_urls.length + js_urls.length;
      
          function on_load() {
            root._bokeh_is_loading--;
            if (root._bokeh_is_loading === 0) {
              console.debug("Bokeh: all BokehJS libraries/stylesheets loaded");
              run_callbacks()
            }
          }
      
          function on_error(url) {
            console.error("failed to load " + url);
          }
      
          for (let i = 0; i < css_urls.length; i++) {
            const url = css_urls[i];
            const element = document.createElement("link");
            element.onload = on_load;
            element.onerror = on_error.bind(null, url);
            element.rel = "stylesheet";
            element.type = "text/css";
            element.href = url;
            console.debug("Bokeh: injecting link tag for BokehJS stylesheet: ", url);
            document.body.appendChild(element);
          }
      
          const hashes = {"https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js": "dM3QQsP+wXdHg42wTqW85BjZQdLNNIXqlPw/BgKoExPmTG7ZLML4EGqLMfqHT6ON", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js": "8x57I4YuIfu8XyZfFo0XVr2WAT8EK4rh/uDe3wF7YuW2FNUSNEpJbsPaB1nJ2fz2", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js": "3QTqdz9LyAm2i0sG5XTePsHec3UHWwVsrOL68SYRoAXsafvfAyqtQ+h440+qIBhS"};
      
          for (let i = 0; i < js_urls.length; i++) {
            const url = js_urls[i];
            const element = document.createElement('script');
            element.onload = on_load;
            element.onerror = on_error.bind(null, url);
            element.async = false;
            element.src = url;
            if (url in hashes) {
              element.crossOrigin = "anonymous";
              element.integrity = "sha384-" + hashes[url];
            }
            console.debug("Bokeh: injecting script tag for BokehJS library: ", url);
            document.head.appendChild(element);
          }
        };
      
        function inject_raw_css(css) {
          const element = document.createElement("style");
          element.appendChild(document.createTextNode(css));
          document.body.appendChild(element);
        }
      
        
        var js_urls = ["https://cdn.bokeh.org/bokeh/release/bokeh-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-widgets-2.3.3.min.js", "https://cdn.bokeh.org/bokeh/release/bokeh-tables-2.3.3.min.js"];
        var css_urls = [];
        
      
        var inline_js = [
          function(Bokeh) {
            Bokeh.set_log_level("info");
          },
          
          function(Bokeh) {
            (function() {
              var fn = function() {
                Bokeh.safely(function() {
                  (function(root) {
                    function embed_document(root) {
                      
                    var docs_json = '{"e66407eb-b50f-44b2-85a7-31a2096f3125":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"4379"},{"id":"4414"}]},"id":"4415","type":"Column"},{"attributes":{"bar_color":"#5499C7","end":1,"js_property_callbacks":{"change:value":[{"id":"4412"}]},"start":-1,"step":0.01,"title":"bias","value":0},"id":"4410","type":"Slider"},{"attributes":{"formatter":{"id":"4607"},"major_label_policy":{"id":"4606"},"ticker":{"id":"4391"}},"id":"4390","type":"LinearAxis"},{"attributes":{"axis":{"id":"4394"},"dimension":1,"ticker":null},"id":"4397","type":"Grid"},{"attributes":{"formatter":{"id":"4610"},"major_label_policy":{"id":"4609"},"ticker":{"id":"4395"}},"id":"4394","type":"LinearAxis"},{"attributes":{"data_source":{"id":"1002"},"glyph":{"id":"4405"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4406"},"view":{"id":"4408"}},"id":"4407","type":"GlyphRenderer"},{"attributes":{},"id":"4609","type":"AllLabels"},{"attributes":{"children":[{"id":"4413"},{"id":"4409"}]},"id":"4414","type":"Row"},{"attributes":{},"id":"4395","type":"BasicTicker"},{"attributes":{"below":[{"id":"4390"}],"center":[{"id":"4393"},{"id":"4397"}],"height":400,"left":[{"id":"4394"}],"renderers":[{"id":"4402"},{"id":"4407"}],"title":{"id":"4380"},"toolbar":{"id":"4398"},"width":800,"x_range":{"id":"4382"},"x_scale":{"id":"4386"},"y_range":{"id":"4384"},"y_scale":{"id":"4388"}},"id":"4379","subtype":"Figure","type":"Plot"},{"attributes":{"args":{"bias_slider":{"id":"4410"},"rss":{"id":"4409"},"slope_slider":{"id":"4411"},"source":{"id":"1002"}},"code":"\\n        const data = source.data;\\n        var bias = bias_slider.value\\n        var coef = slope_slider.value\\n        const x = data[&#x27;index_X&#x27;]\\n        const y = data[&#x27;index_y&#x27;]\\n        const y_true = data[&#x27;y&#x27;]\\n        const errors = [];\\n\\n\\n        for (let i = 0; i &lt; x.length; i++) {\\n            let y_pred = bias + (coef * x[i])\\n            errors.push(y_pred - y_true[i])\\n            y[i] = y_pred\\n        };\\n\\n        let error = errors.map(x =&gt; Math.pow(x, 2)).reduce((a, b) =&gt; a + b, 0);\\n        bias = Math.round(bias * 100) / 100;\\n        coef = Math.round(coef * 100) / 100;\\n        error = Math.round(error * 100) / 100;\\n\\n        rss.text = `\\n        &lt;p&gt;Bias : ${bias} &lt;/p&gt;\\n        &lt;p&gt;Coef : ${coef} &lt;/p&gt;\\n        &lt;p&gt;RSS  : ${error.toString()} &lt;/p&gt;`;\\n\\n        source.change.emit();\\n    "},"id":"4412","type":"CustomJS"},{"attributes":{},"id":"4606","type":"AllLabels"},{"attributes":{},"id":"4388","type":"LinearScale"},{"attributes":{"bar_color":"#F4D03F","end":1,"js_property_callbacks":{"change:value":[{"id":"4412"}]},"start":-1,"step":0.01,"title":"slope","value":0},"id":"4411","type":"Slider"},{"attributes":{"data":{"X":{"__ndarray__":"Hpzg9gvN7T8grkt3t0i2P0bMh0ti7PC/H4YW2KAc1D9VZihsyqrev2heJFDdueQ/cBvBrqKo3b99LWrhplzhP/nsCSfakuM/aoAOg3gO8D+/WBl7Bk3qPyBgEDvMm/g/vp1IqoSh5z/BbA5bNR7Mv0ty7vkt3+m/OIpGXqJ9tz/DMFAPz1r/vwNc6tKvbOA/1Pz0Wvl+8D9fX8/rPPUEwHwwqSgqyt8/OiugAxPauD/n7xYrhM7dv5AGx2H5Su0/Mdc5yccI+T9BDZ8fTHP3P9I7PaFuOOO/UhmlZMpXor+n/ak5LkHjv/T1mo6pI/O/04nor+7a1j/o3X2zbwvYPxSBHSwhtdA/9Nq8q8vz4L/5A4uBiA7tv0A69Ly/Msk/v+3gue8i079CpChtCyXXPzcuH7VJUuo/oNLzQhyr0r+P6aQIGyHXP005qFNYqeW/K6oBjlRe+D8wPL9sq5Xgv0CmV9+8+M2/GqWMy0wY2b/hr1BvSEXTv68KAS/SpOS/gMUgGEIK1T+1ae/SCrzKP5eS8aZq+NS/DTrIENnxdD8723AmM/jNvzfj0Tl0pfc/QA8qJjCl2L+IQQCR1/3VP4pMD4lrM9U/E259YKzDx7+ETvSA8wbOv+Ic7A8Vzf+/OFhtsMq91D/ZmGbhPObMvzBuPE2Ms/G/eEjIDDh35r8Q9Hamjmr3v1O8eMcj/+4/EuTucEOZ+7++Ne6+y5z+v2M8oWpC/uG/89fwRtOO6D+w1UonNgDqP8cTFMTLmPa/BriwrAao978ceuJZk4jzv1MVD7Xe2uq/CHRAqHRE+T8AaBhqqjfvP3D5nqWe+M4/IzBrdqLz0j8o+spRlWvhv04VDZhpNfy/NQYxP2xlvD8MLqRVZe/FP/9asANAQPW/YsLX/vjp8D9fMbI2IJu9v4ueeUveC96/hoOw1m6ki795UaNnjjTwvyoF3gWlssG/FfXOPXhq8r/9zYO+KLP1P8Y1sUaHSbE/oXaXyWQO4L/ZriIKG3vdv1f2GHPuov0/YicNwcTL9r8npqi49gjnv/ojK11Bb7K/zylztCLK078=","dtype":"float64","order":"little","shape":[100]},"index_X":{"__ndarray__":"X1/P6zz1BMB9/fzOuZgEwJqbKrI2PATAuDlYlbPfA8DW14V4MIMDwPN1s1utJgPAERThPirKAsAusg4ip20CwExQPAUkEQLAau5p6KC0AcCHjJfLHVgBwKUqxa6a+wDAw8jykRefAMDgZiB1lEIAwPwJnLAizP+/N0b3dhwT/79yglI9Flr+v66+rQMQof2/6foIygno/L8kN2SQAy/8v2Bzv1b9dfu/m68aHfe8+r/W63Xj8AP6vxEo0anqSvm/TWQscOSR+L+IoIc23tj3v8Pc4vzXH/e//xg+w9Fm9r86VZmJy631v3WR9E/F9PS/sM1PFr879L/sCavcuILzvydGBqOyyfK/YoJhaawQ8r+evrwvplfxv9n6F/afnvC/KG7meDPL77+e5pwFJ1nuvxZfU5Ia5+y/jNcJHw51678CUMCrAQPqv3rIdjj1kOi/8EAtxege579mueNR3Kzlv9wxmt7POuS/VKpQa8PI4r/IIgf4tlbhv4A2ewlVyd+/cCfoIjzl3L9YGFU8IwHav0gJwlUKHde/OPoub/E41L8g65uI2FTRvyC4EUR/4cy/AJrrdk0Zx7/Qe8WpG1HBv2C7PrnTEbe/QP7kPeACp78AgHqz9uYtPwDzSyuuPqc/4DXyr7ovtz8QOR8lD2DBPzBXRfJAKMc/YHVrv3LwzD/AyUhGUlzRP9DY2yxrQNQ/6OduE4Qk1z/49gH6nAjaPwgGleC17Nw/IBUox87Q3z8Ykt3Wc1rhP6QZJ0qAzOI/LKFwvYw+5D+0KLowmbDlP0CwA6SlIuc/yDdNF7KU6D9Qv5aKvgbqP9xG4P3KeOs/ZM4pcdfq7D/sVXPk41zuP3jdvFfwzu8/gDKDZX6g8D9E9iefhFnxPwq6zNiKEvI/zn1xEpHL8j+UQRZMl4TzP1gFu4WdPfQ/HMlfv6P29D/ijAT5qa/1P6ZQqTKwaPY/ahRObLYh9z8u2PKlvNr3P/abl9/Ck/g/ul88GclM+T9+I+FSzwX6P0LnhYzVvvo/Bqsqxtt3+z/Kbs//4TD8P5IydDno6fw/V/YYc+6i/T8=","dtype":"float64","order":"little","shape":[100,1]},"index_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[100,1]},"y":{"__ndarray__":"67c6RhWj5T/KA7tmaWbCP+hldnLTbt4/0h+rI51N1z9qGdAvKxvZPyYfhjIwoeA/nOpEgBX7wz+Q18B6WX2/PzuPFUyTYNk/Td3eZZiI0j8khkYEmYTePww2ETiRkuc/NAqmyMpW4T/Fdd5DtO/iP1ya0nW7mbE/Gtbdri/D4T8Nl4DQ0ejFP4c+8V76stk/Rv/1HO35yT8AyZR2+bydPyBhLhP5mNY/YXFsuhzS1z+hR0BmGdTFP/xIIdDtANI/yjOC5FC45T81L8uzBvfhP6xkYPTOJuM/B2qk0dSW3T94PeiDnR7HP9iw1wKz5bI//+VymONq4D8QIh1HQ2nlPzLtDXa2EtQ/CniXGwe01j/OT5n0FUnLP7zXiolN6cY/2lQIQ0qfzD8cXZt6GcfRP2nfMpaGY+g/QHUTCZvU4z/ZBA1H9MjhPwO9r42vstE/vOjk/uhK3j8M4WEEdl3XPyQOxp5xK9o/rEYPt6uO4T9dNDyIMnLVP+BxPDgc2sA/MvKzc8nq4j92h2mC7+zZP36ht0fnJOA/kxKSsKaQ4D8AAAAAAAAAAAAAAAAAAPA/LL46JVhP6j84gpCG6lfjP1Ru7FEJ0uA/axoCNfzm4D9dZ2LjMbzYPzxnSTpclcg/uYFe/N0q5T/3u6b/LZzXP56uJloscdU/b4E7IBAU0D8zqltoRk3LPz4Z5dUXGOM/pjjinwpVwT/rm0oiG8vEP6H5S5BzGdY/hDIRK/J75j83uxUeL4XkP8s7C7oH8sk/F9z8uIcTyj+VTbITeQ7dP/XKRTFI8+E/orDsHGt61T8EPd22MOblP0T9gZVnLds/Lgj2ByPTzj/IzIiyliTKP5IKu6w+WdY/GSa1HScx4T9Xm/kLSN/NP7+OGAcH6Nk/5ZKUAJE74j/Pa7GrKn7fP3rqwxYfStY/JI+Sswf20j/h1t1GJXHZP7XkrcXXvdQ/6g8fBnqZwz9yoy9L3nXnP97kGV1IDeE//hjX3uvx1T9VCwcOcWDSP1TCXcT9XuE/WLlPIVKSsT+lkPYoHNrFPyoBaNL4hOA/kRsCeqJKyj8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"1063"},"selection_policy":{"id":"1062"}},"id":"1002","type":"ColumnDataSource"},{"attributes":{},"id":"1062","type":"UnionRenderers"},{"attributes":{"end":3,"start":-3},"id":"4384","type":"Range1d"},{"attributes":{"active_multi":null},"id":"4398","type":"Toolbar"},{"attributes":{},"id":"1063","type":"Selection"},{"attributes":{"end":3,"start":-3},"id":"4382","type":"Range1d"},{"attributes":{"text":"\\n        &lt;p&gt;Bias : 0 &lt;/p&gt;\\n        &lt;p&gt;Coef : 0 &lt;/p&gt;\\n        &lt;p&gt;RSS  : 0 &lt;/p&gt;\\n        "},"id":"4409","type":"Div"},{"attributes":{"data":{"x":{"__ndarray__":"Hpzg9gvN7T8grkt3t0i2P0bMh0ti7PC/H4YW2KAc1D9VZihsyqrev2heJFDdueQ/cBvBrqKo3b99LWrhplzhP/nsCSfakuM/aoAOg3gO8D+/WBl7Bk3qPyBgEDvMm/g/vp1IqoSh5z/BbA5bNR7Mv0ty7vkt3+m/OIpGXqJ9tz/DMFAPz1r/vwNc6tKvbOA/1Pz0Wvl+8D9fX8/rPPUEwHwwqSgqyt8/OiugAxPauD/n7xYrhM7dv5AGx2H5Su0/Mdc5yccI+T9BDZ8fTHP3P9I7PaFuOOO/UhmlZMpXor+n/ak5LkHjv/T1mo6pI/O/04nor+7a1j/o3X2zbwvYPxSBHSwhtdA/9Nq8q8vz4L/5A4uBiA7tv0A69Ly/Msk/v+3gue8i079CpChtCyXXPzcuH7VJUuo/oNLzQhyr0r+P6aQIGyHXP005qFNYqeW/K6oBjlRe+D8wPL9sq5Xgv0CmV9+8+M2/GqWMy0wY2b/hr1BvSEXTv68KAS/SpOS/gMUgGEIK1T+1ae/SCrzKP5eS8aZq+NS/DTrIENnxdD8723AmM/jNvzfj0Tl0pfc/QA8qJjCl2L+IQQCR1/3VP4pMD4lrM9U/E259YKzDx7+ETvSA8wbOv+Ic7A8Vzf+/OFhtsMq91D/ZmGbhPObMvzBuPE2Ms/G/eEjIDDh35r8Q9Hamjmr3v1O8eMcj/+4/EuTucEOZ+7++Ne6+y5z+v2M8oWpC/uG/89fwRtOO6D+w1UonNgDqP8cTFMTLmPa/BriwrAao978ceuJZk4jzv1MVD7Xe2uq/CHRAqHRE+T8AaBhqqjfvP3D5nqWe+M4/IzBrdqLz0j8o+spRlWvhv04VDZhpNfy/NQYxP2xlvD8MLqRVZe/FP/9asANAQPW/YsLX/vjp8D9fMbI2IJu9v4ueeUveC96/hoOw1m6ki795UaNnjjTwvyoF3gWlssG/FfXOPXhq8r/9zYO+KLP1P8Y1sUaHSbE/oXaXyWQO4L/ZriIKG3vdv1f2GHPuov0/YicNwcTL9r8npqi49gjnv/ojK11Bb7K/zylztCLK078=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"67c6RhWj5T/KA7tmaWbCP+hldnLTbt4/0h+rI51N1z9qGdAvKxvZPyYfhjIwoeA/nOpEgBX7wz+Q18B6WX2/PzuPFUyTYNk/Td3eZZiI0j8khkYEmYTePww2ETiRkuc/NAqmyMpW4T/Fdd5DtO/iP1ya0nW7mbE/Gtbdri/D4T8Nl4DQ0ejFP4c+8V76stk/Rv/1HO35yT8AyZR2+bydPyBhLhP5mNY/YXFsuhzS1z+hR0BmGdTFP/xIIdDtANI/yjOC5FC45T81L8uzBvfhP6xkYPTOJuM/B2qk0dSW3T94PeiDnR7HP9iw1wKz5bI//+VymONq4D8QIh1HQ2nlPzLtDXa2EtQ/CniXGwe01j/OT5n0FUnLP7zXiolN6cY/2lQIQ0qfzD8cXZt6GcfRP2nfMpaGY+g/QHUTCZvU4z/ZBA1H9MjhPwO9r42vstE/vOjk/uhK3j8M4WEEdl3XPyQOxp5xK9o/rEYPt6uO4T9dNDyIMnLVP+BxPDgc2sA/MvKzc8nq4j92h2mC7+zZP36ht0fnJOA/kxKSsKaQ4D8AAAAAAAAAAAAAAAAAAPA/LL46JVhP6j84gpCG6lfjP1Ru7FEJ0uA/axoCNfzm4D9dZ2LjMbzYPzxnSTpclcg/uYFe/N0q5T/3u6b/LZzXP56uJloscdU/b4E7IBAU0D8zqltoRk3LPz4Z5dUXGOM/pjjinwpVwT/rm0oiG8vEP6H5S5BzGdY/hDIRK/J75j83uxUeL4XkP8s7C7oH8sk/F9z8uIcTyj+VTbITeQ7dP/XKRTFI8+E/orDsHGt61T8EPd22MOblP0T9gZVnLds/Lgj2ByPTzj/IzIiyliTKP5IKu6w+WdY/GSa1HScx4T9Xm/kLSN/NP7+OGAcH6Nk/5ZKUAJE74j/Pa7GrKn7fP3rqwxYfStY/JI+Sswf20j/h1t1GJXHZP7XkrcXXvdQ/6g8fBnqZwz9yoy9L3nXnP97kGV1IDeE//hjX3uvx1T9VCwcOcWDSP1TCXcT9XuE/WLlPIVKSsT+lkPYoHNrFPyoBaNL4hOA/kRsCeqJKyj8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"4612"},"selection_policy":{"id":"4611"}},"id":"4399","type":"ColumnDataSource"},{"attributes":{},"id":"4386","type":"LinearScale"},{"attributes":{"line_alpha":0.1,"line_color":"orangered","line_width":1.5,"x":{"field":"index_X"},"y":{"field":"index_y"}},"id":"4406","type":"Line"},{"attributes":{},"id":"4391","type":"BasicTicker"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"4400","type":"Scatter"},{"attributes":{"line_color":"orangered","line_width":1.5,"x":{"field":"index_X"},"y":{"field":"index_y"}},"id":"4405","type":"Line"},{"attributes":{},"id":"4611","type":"UnionRenderers"},{"attributes":{"children":[{"id":"4410"},{"id":"4411"}]},"id":"4413","type":"Column"},{"attributes":{},"id":"4610","type":"BasicTickFormatter"},{"attributes":{"data_source":{"id":"4399"},"glyph":{"id":"4400"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"4401"},"view":{"id":"4403"}},"id":"4402","type":"GlyphRenderer"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"4401","type":"Scatter"},{"attributes":{"source":{"id":"4399"}},"id":"4403","type":"CDSView"},{"attributes":{"source":{"id":"1002"}},"id":"4408","type":"CDSView"},{"attributes":{},"id":"4612","type":"Selection"},{"attributes":{},"id":"4607","type":"BasicTickFormatter"},{"attributes":{"text":"Interactive linear regression error","text_font_size":"1rem"},"id":"4380","type":"Title"},{"attributes":{"axis":{"id":"4390"},"ticker":null},"id":"4393","type":"Grid"}],"root_ids":["4415"]},"title":"Bokeh Application","version":"2.3.3"}}';
                    var render_items = [{"docid":"e66407eb-b50f-44b2-85a7-31a2096f3125","root_ids":["4415"],"roots":{"4415":"103e678b-566f-4c2a-873b-4ce43171e49a"}}];
                    root.Bokeh.embed.embed_items(docs_json, render_items);
                  
                    }
                    if (root.Bokeh !== undefined) {
                      embed_document(root);
                    } else {
                      var attempts = 0;
                      var timer = setInterval(function(root) {
                        if (root.Bokeh !== undefined) {
                          clearInterval(timer);
                          embed_document(root);
                        } else {
                          attempts++;
                          if (attempts > 100) {
                            clearInterval(timer);
                            console.log("Bokeh: ERROR: Unable to run BokehJS code because BokehJS library is missing");
                          }
                        }
                      }, 10, root)
                    }
                  })(window);
                });
              };
              if (document.readyState != "loading") fn();
              else document.addEventListener("DOMContentLoaded", fn);
            })();
          },
          function(Bokeh) {
          
          
          }
        ];
      
        function run_inline_js() {
          
          for (var i = 0; i < inline_js.length; i++) {
            inline_js[i].call(root, root.Bokeh);
          }
          
        }
      
        if (root._bokeh_is_loading === 0) {
          console.debug("Bokeh: BokehJS loaded, going straight to plotting");
          run_inline_js();
        } else {
          load_libs(css_urls, js_urls, function() {
            console.debug("Bokeh: BokehJS plotting callback run at", now());
            run_inline_js();
          });
        }
      }(window));
    };
    if (document.readyState != "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  })();