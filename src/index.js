import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
/**
 * 텍스트 노드를 감싸는 커스텀 태그 생성
 *
 * @param {nodes}
 */
const setTextNodes = function(nodes) {
  const excludeEl = 'SCRIPT STYLE SELECT OPTION IMG FRAMESET FRAME IFRAME NOSCRIPT BR BUTTON INPUT PATH'.split(
    ' '
  );
  for (let i = 0; i < nodes.length; i = i + 1) {
    const exclude = excludeEl.indexOf(nodes[i].parentNode.nodeName);
    if (nodes[i].nodeValue.trim() && exclude) {
      const item = nodes[i];
      const parent = nodes[i].parentNode;
      const name = document.createElement('hn-acc');
      const clone = nodes[i].cloneNode(true);
      name.className = 'hn-style';
      parent.replaceChild(name, item);
      name.appendChild(clone);
      parent.appendChild(name);
    }
  }
}

const getTextNodes = function(root) {
  let node;
    const textNodes = [];
    const textTree = document.createTreeWalker(
      root,
      NodeFilter.SHOW_TEXT,
      null,
      false
    );

    while ((node = textTree.nextNode())) {
      textNodes.push(node);
    }
    return textNodes;
}

const mountID = 'app-feature-accessibility';
const mount = document.createElement('div');
  mount.setAttribute('id', mountID);
  document.body.appendChild(mount);

  const mountEl = document.getElementById(mountID);
  if (mountEl) {
    setTextNodes(getTextNodes(document.body));
    ReactDOM.render((<React.StrictMode>
      <div className="accessibility">
        <App />
      </div>
      </React.StrictMode>)
      , mountEl
    );
}
