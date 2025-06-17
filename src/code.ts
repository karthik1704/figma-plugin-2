figma.showUI(__html__, { width: 300, height: 400 });

figma.ui.onmessage = (msg) => {
  if (msg.type === 'create-rectangle') {
    const rect = figma.createRectangle();
    rect.x = 0;
    rect.y = 0;
    rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
    figma.currentPage.appendChild(rect);
  }
  
  if (msg.type === 'close') {
    figma.closePlugin();
  }
};