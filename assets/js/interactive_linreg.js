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
    
      
      
    
      var element = document.getElementById("e4db036e-7387-49b2-9645-a849fcfb3737");
        if (element == null) {
          console.warn("Bokeh: autoload.js configured with elementid 'e4db036e-7387-49b2-9645-a849fcfb3737' but no matching script tag was found.")
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
                    
                  var docs_json = '{"ef8b7ae8-d7a1-4584-b677-a4cf92b918bf":{"defs":[],"roots":{"references":[{"attributes":{"children":[{"id":"1624"},{"id":"1659"}],"sizing_mode":"scale_width"},"id":"1660","type":"Column"},{"attributes":{},"id":"1712","type":"Selection"},{"attributes":{},"id":"1706","type":"BasicTickFormatter"},{"attributes":{},"id":"1633","type":"LinearScale"},{"attributes":{"axis":{"id":"1639"},"dimension":1,"ticker":null},"id":"1642","type":"Grid"},{"attributes":{"data_source":{"id":"1644"},"glyph":{"id":"1645"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1646"},"view":{"id":"1648"}},"id":"1647","type":"GlyphRenderer"},{"attributes":{"axis":{"id":"1635"},"ticker":null},"id":"1638","type":"Grid"},{"attributes":{"formatter":{"id":"1706"},"major_label_policy":{"id":"1708"},"ticker":{"id":"1640"}},"id":"1639","type":"LinearAxis"},{"attributes":{"fill_alpha":{"value":0.1},"fill_color":{"value":"#1f77b4"},"line_alpha":{"value":0.1},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1646","type":"Scatter"},{"attributes":{},"id":"1711","type":"AllLabels"},{"attributes":{"data_source":{"id":"1002"},"glyph":{"id":"1650"},"hover_glyph":null,"muted_glyph":null,"nonselection_glyph":{"id":"1651"},"view":{"id":"1653"}},"id":"1652","type":"GlyphRenderer"},{"attributes":{"formatter":{"id":"1709"},"major_label_policy":{"id":"1711"},"ticker":{"id":"1636"}},"id":"1635","type":"LinearAxis"},{"attributes":{"source":{"id":"1644"}},"id":"1648","type":"CDSView"},{"attributes":{"line_color":"orangered","line_width":1.5,"x":{"field":"index_X"},"y":{"field":"index_y"}},"id":"1650","type":"Line"},{"attributes":{},"id":"1636","type":"BasicTicker"},{"attributes":{"below":[{"id":"1635"}],"center":[{"id":"1638"},{"id":"1642"}],"height":400,"left":[{"id":"1639"}],"renderers":[{"id":"1647"},{"id":"1652"}],"sizing_mode":"scale_width","title":{"id":"1625"},"toolbar":{"id":"1643"},"width":800,"x_range":{"id":"1627"},"x_scale":{"id":"1631"},"y_range":{"id":"1629"},"y_scale":{"id":"1633"}},"id":"1624","subtype":"Figure","type":"Plot"},{"attributes":{"end":3,"start":-3},"id":"1629","type":"Range1d"},{"attributes":{},"id":"1631","type":"LinearScale"},{"attributes":{"bar_color":"#F4D03F","end":1,"js_property_callbacks":{"change:value":[{"id":"1657"}]},"start":-1,"step":0.01,"title":"slope","value":0},"id":"1656","type":"Slider"},{"attributes":{"children":[{"id":"1658"},{"id":"1654"}],"sizing_mode":"scale_width"},"id":"1659","type":"Row"},{"attributes":{"fill_color":{"value":"#1f77b4"},"line_color":{"value":"#1f77b4"},"size":{"value":5},"x":{"field":"x"},"y":{"field":"y"}},"id":"1645","type":"Scatter"},{"attributes":{},"id":"1050","type":"UnionRenderers"},{"attributes":{},"id":"1708","type":"AllLabels"},{"attributes":{"source":{"id":"1002"}},"id":"1653","type":"CDSView"},{"attributes":{"line_alpha":0.1,"line_color":"orangered","line_width":1.5,"x":{"field":"index_X"},"y":{"field":"index_y"}},"id":"1651","type":"Line"},{"attributes":{},"id":"1713","type":"UnionRenderers"},{"attributes":{},"id":"1640","type":"BasicTicker"},{"attributes":{"children":[{"id":"1655"},{"id":"1656"}]},"id":"1658","type":"Column"},{"attributes":{"text":"Interactive linear regression error","text_font_size":"1rem"},"id":"1625","type":"Title"},{"attributes":{},"id":"1049","type":"Selection"},{"attributes":{"end":3,"start":-3},"id":"1627","type":"Range1d"},{"attributes":{"text":"\\n        &lt;p&gt;Bias : 0 &lt;/p&gt;\\n        &lt;p&gt;Coef : 0 &lt;/p&gt;\\n        &lt;p&gt;RSS  : 0 &lt;/p&gt;\\n        "},"id":"1654","type":"Div"},{"attributes":{"data":{"x":{"__ndarray__":"Hpzg9gvN7T8grkt3t0i2P0bMh0ti7PC/H4YW2KAc1D9VZihsyqrev2heJFDdueQ/cBvBrqKo3b99LWrhplzhP/nsCSfakuM/aoAOg3gO8D+/WBl7Bk3qPyBgEDvMm/g/vp1IqoSh5z/BbA5bNR7Mv0ty7vkt3+m/OIpGXqJ9tz/DMFAPz1r/vwNc6tKvbOA/1Pz0Wvl+8D9fX8/rPPUEwHwwqSgqyt8/OiugAxPauD/n7xYrhM7dv5AGx2H5Su0/Mdc5yccI+T9BDZ8fTHP3P9I7PaFuOOO/UhmlZMpXor+n/ak5LkHjv/T1mo6pI/O/04nor+7a1j/o3X2zbwvYPxSBHSwhtdA/9Nq8q8vz4L/5A4uBiA7tv0A69Ly/Msk/v+3gue8i079CpChtCyXXPzcuH7VJUuo/oNLzQhyr0r+P6aQIGyHXP005qFNYqeW/K6oBjlRe+D8wPL9sq5Xgv0CmV9+8+M2/GqWMy0wY2b/hr1BvSEXTv68KAS/SpOS/gMUgGEIK1T+1ae/SCrzKP5eS8aZq+NS/DTrIENnxdD8723AmM/jNvzfj0Tl0pfc/QA8qJjCl2L+IQQCR1/3VP4pMD4lrM9U/E259YKzDx7+ETvSA8wbOv+Ic7A8Vzf+/OFhtsMq91D/ZmGbhPObMvzBuPE2Ms/G/eEjIDDh35r8Q9Hamjmr3v1O8eMcj/+4/EuTucEOZ+7++Ne6+y5z+v2M8oWpC/uG/89fwRtOO6D+w1UonNgDqP8cTFMTLmPa/BriwrAao978ceuJZk4jzv1MVD7Xe2uq/CHRAqHRE+T8AaBhqqjfvP3D5nqWe+M4/IzBrdqLz0j8o+spRlWvhv04VDZhpNfy/NQYxP2xlvD8MLqRVZe/FP/9asANAQPW/YsLX/vjp8D9fMbI2IJu9v4ueeUveC96/hoOw1m6ki795UaNnjjTwvyoF3gWlssG/FfXOPXhq8r/9zYO+KLP1P8Y1sUaHSbE/oXaXyWQO4L/ZriIKG3vdv1f2GHPuov0/YicNwcTL9r8npqi49gjnv/ojK11Bb7K/zylztCLK078=","dtype":"float64","order":"little","shape":[100]},"y":{"__ndarray__":"67c6RhWj5T/KA7tmaWbCP+hldnLTbt4/0h+rI51N1z9qGdAvKxvZPyYfhjIwoeA/nOpEgBX7wz+Q18B6WX2/PzuPFUyTYNk/Td3eZZiI0j8khkYEmYTePww2ETiRkuc/NAqmyMpW4T/Fdd5DtO/iP1ya0nW7mbE/Gtbdri/D4T8Nl4DQ0ejFP4c+8V76stk/Rv/1HO35yT8AyZR2+bydPyBhLhP5mNY/YXFsuhzS1z+hR0BmGdTFP/xIIdDtANI/yjOC5FC45T81L8uzBvfhP6xkYPTOJuM/B2qk0dSW3T94PeiDnR7HP9iw1wKz5bI//+VymONq4D8QIh1HQ2nlPzLtDXa2EtQ/CniXGwe01j/OT5n0FUnLP7zXiolN6cY/2lQIQ0qfzD8cXZt6GcfRP2nfMpaGY+g/QHUTCZvU4z/ZBA1H9MjhPwO9r42vstE/vOjk/uhK3j8M4WEEdl3XPyQOxp5xK9o/rEYPt6uO4T9dNDyIMnLVP+BxPDgc2sA/MvKzc8nq4j92h2mC7+zZP36ht0fnJOA/kxKSsKaQ4D8AAAAAAAAAAAAAAAAAAPA/LL46JVhP6j84gpCG6lfjP1Ru7FEJ0uA/axoCNfzm4D9dZ2LjMbzYPzxnSTpclcg/uYFe/N0q5T/3u6b/LZzXP56uJloscdU/b4E7IBAU0D8zqltoRk3LPz4Z5dUXGOM/pjjinwpVwT/rm0oiG8vEP6H5S5BzGdY/hDIRK/J75j83uxUeL4XkP8s7C7oH8sk/F9z8uIcTyj+VTbITeQ7dP/XKRTFI8+E/orDsHGt61T8EPd22MOblP0T9gZVnLds/Lgj2ByPTzj/IzIiyliTKP5IKu6w+WdY/GSa1HScx4T9Xm/kLSN/NP7+OGAcH6Nk/5ZKUAJE74j/Pa7GrKn7fP3rqwxYfStY/JI+Sswf20j/h1t1GJXHZP7XkrcXXvdQ/6g8fBnqZwz9yoy9L3nXnP97kGV1IDeE//hjX3uvx1T9VCwcOcWDSP1TCXcT9XuE/WLlPIVKSsT+lkPYoHNrFPyoBaNL4hOA/kRsCeqJKyj8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"1712"},"selection_policy":{"id":"1713"}},"id":"1644","type":"ColumnDataSource"},{"attributes":{},"id":"1709","type":"BasicTickFormatter"},{"attributes":{"active_multi":null},"id":"1643","type":"Toolbar"},{"attributes":{"bar_color":"#5499C7","end":1,"js_property_callbacks":{"change:value":[{"id":"1657"}]},"start":-1,"step":0.01,"title":"bias","value":0},"id":"1655","type":"Slider"},{"attributes":{"data":{"X":{"__ndarray__":"Hpzg9gvN7T8grkt3t0i2P0bMh0ti7PC/H4YW2KAc1D9VZihsyqrev2heJFDdueQ/cBvBrqKo3b99LWrhplzhP/nsCSfakuM/aoAOg3gO8D+/WBl7Bk3qPyBgEDvMm/g/vp1IqoSh5z/BbA5bNR7Mv0ty7vkt3+m/OIpGXqJ9tz/DMFAPz1r/vwNc6tKvbOA/1Pz0Wvl+8D9fX8/rPPUEwHwwqSgqyt8/OiugAxPauD/n7xYrhM7dv5AGx2H5Su0/Mdc5yccI+T9BDZ8fTHP3P9I7PaFuOOO/UhmlZMpXor+n/ak5LkHjv/T1mo6pI/O/04nor+7a1j/o3X2zbwvYPxSBHSwhtdA/9Nq8q8vz4L/5A4uBiA7tv0A69Ly/Msk/v+3gue8i079CpChtCyXXPzcuH7VJUuo/oNLzQhyr0r+P6aQIGyHXP005qFNYqeW/K6oBjlRe+D8wPL9sq5Xgv0CmV9+8+M2/GqWMy0wY2b/hr1BvSEXTv68KAS/SpOS/gMUgGEIK1T+1ae/SCrzKP5eS8aZq+NS/DTrIENnxdD8723AmM/jNvzfj0Tl0pfc/QA8qJjCl2L+IQQCR1/3VP4pMD4lrM9U/E259YKzDx7+ETvSA8wbOv+Ic7A8Vzf+/OFhtsMq91D/ZmGbhPObMvzBuPE2Ms/G/eEjIDDh35r8Q9Hamjmr3v1O8eMcj/+4/EuTucEOZ+7++Ne6+y5z+v2M8oWpC/uG/89fwRtOO6D+w1UonNgDqP8cTFMTLmPa/BriwrAao978ceuJZk4jzv1MVD7Xe2uq/CHRAqHRE+T8AaBhqqjfvP3D5nqWe+M4/IzBrdqLz0j8o+spRlWvhv04VDZhpNfy/NQYxP2xlvD8MLqRVZe/FP/9asANAQPW/YsLX/vjp8D9fMbI2IJu9v4ueeUveC96/hoOw1m6ki795UaNnjjTwvyoF3gWlssG/FfXOPXhq8r/9zYO+KLP1P8Y1sUaHSbE/oXaXyWQO4L/ZriIKG3vdv1f2GHPuov0/YicNwcTL9r8npqi49gjnv/ojK11Bb7K/zylztCLK078=","dtype":"float64","order":"little","shape":[100]},"index_X":{"__ndarray__":"X1/P6zz1BMB9/fzOuZgEwJqbKrI2PATAuDlYlbPfA8DW14V4MIMDwPN1s1utJgPAERThPirKAsAusg4ip20CwExQPAUkEQLAau5p6KC0AcCHjJfLHVgBwKUqxa6a+wDAw8jykRefAMDgZiB1lEIAwPwJnLAizP+/N0b3dhwT/79yglI9Flr+v66+rQMQof2/6foIygno/L8kN2SQAy/8v2Bzv1b9dfu/m68aHfe8+r/W63Xj8AP6vxEo0anqSvm/TWQscOSR+L+IoIc23tj3v8Pc4vzXH/e//xg+w9Fm9r86VZmJy631v3WR9E/F9PS/sM1PFr879L/sCavcuILzvydGBqOyyfK/YoJhaawQ8r+evrwvplfxv9n6F/afnvC/KG7meDPL77+e5pwFJ1nuvxZfU5Ia5+y/jNcJHw51678CUMCrAQPqv3rIdjj1kOi/8EAtxege579mueNR3Kzlv9wxmt7POuS/VKpQa8PI4r/IIgf4tlbhv4A2ewlVyd+/cCfoIjzl3L9YGFU8IwHav0gJwlUKHde/OPoub/E41L8g65uI2FTRvyC4EUR/4cy/AJrrdk0Zx7/Qe8WpG1HBv2C7PrnTEbe/QP7kPeACp78AgHqz9uYtPwDzSyuuPqc/4DXyr7ovtz8QOR8lD2DBPzBXRfJAKMc/YHVrv3LwzD/AyUhGUlzRP9DY2yxrQNQ/6OduE4Qk1z/49gH6nAjaPwgGleC17Nw/IBUox87Q3z8Ykt3Wc1rhP6QZJ0qAzOI/LKFwvYw+5D+0KLowmbDlP0CwA6SlIuc/yDdNF7KU6D9Qv5aKvgbqP9xG4P3KeOs/ZM4pcdfq7D/sVXPk41zuP3jdvFfwzu8/gDKDZX6g8D9E9iefhFnxPwq6zNiKEvI/zn1xEpHL8j+UQRZMl4TzP1gFu4WdPfQ/HMlfv6P29D/ijAT5qa/1P6ZQqTKwaPY/ahRObLYh9z8u2PKlvNr3P/abl9/Ck/g/ul88GclM+T9+I+FSzwX6P0LnhYzVvvo/Bqsqxtt3+z/Kbs//4TD8P5IydDno6fw/V/YYc+6i/T8=","dtype":"float64","order":"little","shape":[100,1]},"index_y":{"__ndarray__":"AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=","dtype":"float64","order":"little","shape":[100,1]},"y":{"__ndarray__":"67c6RhWj5T/KA7tmaWbCP+hldnLTbt4/0h+rI51N1z9qGdAvKxvZPyYfhjIwoeA/nOpEgBX7wz+Q18B6WX2/PzuPFUyTYNk/Td3eZZiI0j8khkYEmYTePww2ETiRkuc/NAqmyMpW4T/Fdd5DtO/iP1ya0nW7mbE/Gtbdri/D4T8Nl4DQ0ejFP4c+8V76stk/Rv/1HO35yT8AyZR2+bydPyBhLhP5mNY/YXFsuhzS1z+hR0BmGdTFP/xIIdDtANI/yjOC5FC45T81L8uzBvfhP6xkYPTOJuM/B2qk0dSW3T94PeiDnR7HP9iw1wKz5bI//+VymONq4D8QIh1HQ2nlPzLtDXa2EtQ/CniXGwe01j/OT5n0FUnLP7zXiolN6cY/2lQIQ0qfzD8cXZt6GcfRP2nfMpaGY+g/QHUTCZvU4z/ZBA1H9MjhPwO9r42vstE/vOjk/uhK3j8M4WEEdl3XPyQOxp5xK9o/rEYPt6uO4T9dNDyIMnLVP+BxPDgc2sA/MvKzc8nq4j92h2mC7+zZP36ht0fnJOA/kxKSsKaQ4D8AAAAAAAAAAAAAAAAAAPA/LL46JVhP6j84gpCG6lfjP1Ru7FEJ0uA/axoCNfzm4D9dZ2LjMbzYPzxnSTpclcg/uYFe/N0q5T/3u6b/LZzXP56uJloscdU/b4E7IBAU0D8zqltoRk3LPz4Z5dUXGOM/pjjinwpVwT/rm0oiG8vEP6H5S5BzGdY/hDIRK/J75j83uxUeL4XkP8s7C7oH8sk/F9z8uIcTyj+VTbITeQ7dP/XKRTFI8+E/orDsHGt61T8EPd22MOblP0T9gZVnLds/Lgj2ByPTzj/IzIiyliTKP5IKu6w+WdY/GSa1HScx4T9Xm/kLSN/NP7+OGAcH6Nk/5ZKUAJE74j/Pa7GrKn7fP3rqwxYfStY/JI+Sswf20j/h1t1GJXHZP7XkrcXXvdQ/6g8fBnqZwz9yoy9L3nXnP97kGV1IDeE//hjX3uvx1T9VCwcOcWDSP1TCXcT9XuE/WLlPIVKSsT+lkPYoHNrFPyoBaNL4hOA/kRsCeqJKyj8=","dtype":"float64","order":"little","shape":[100]}},"selected":{"id":"1049"},"selection_policy":{"id":"1050"}},"id":"1002","type":"ColumnDataSource"},{"attributes":{"args":{"bias_slider":{"id":"1655"},"rss":{"id":"1654"},"slope_slider":{"id":"1656"},"source":{"id":"1002"}},"code":"\\n        const data = source.data;\\n        var bias = bias_slider.value\\n        var coef = slope_slider.value\\n        const x = data[&#x27;index_X&#x27;]\\n        const y = data[&#x27;index_y&#x27;]\\n        const y_true = data[&#x27;y&#x27;]\\n        const errors = [];\\n\\n\\n        for (let i = 0; i &lt; x.length; i++) {\\n            let y_pred = bias + (coef * x[i])\\n            errors.push(y_pred - y_true[i])\\n            y[i] = y_pred\\n        };\\n\\n        let error = errors.map(x =&gt; Math.pow(x, 2)).reduce((a, b) =&gt; a + b, 0);\\n        bias = Math.round(bias * 100) / 100;\\n        coef = Math.round(coef * 100) / 100;\\n        error = Math.round(error * 100) / 100;\\n\\n        rss.text = `\\n        &lt;p&gt;Bias : ${bias} &lt;/p&gt;\\n        &lt;p&gt;Coef : ${coef} &lt;/p&gt;\\n        &lt;p&gt;RSS  : ${error.toString()} &lt;/p&gt;`;\\n\\n        source.change.emit();\\n    "},"id":"1657","type":"CustomJS"}],"root_ids":["1660"]},"title":"Bokeh Application","version":"2.3.3"}}';
                  var render_items = [{"docid":"ef8b7ae8-d7a1-4584-b677-a4cf92b918bf","root_ids":["1660"],"roots":{"1660":"e4db036e-7387-49b2-9645-a849fcfb3737"}}];
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