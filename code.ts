figma.showUI(__html__, { height: 400, width: 460 });

// message contains the svg as text and the name
figma.ui.onmessage = async ({ logoText, name }) => {
  // create the svg from text and attempt to position in screen
  const svg = figma.createNodeFromSvg(logoText);
  svg.name = name;
  svg.x = figma.viewport.center.x;
  svg.y = figma.viewport.center.y;

  // select and scroll into view, sometimes this doesn't
  // work so well and i'm not sure why
  figma.currentPage.selection = [svg];
  figma.viewport.scrollAndZoomIntoView([svg]);

  figma.closePlugin();
};
