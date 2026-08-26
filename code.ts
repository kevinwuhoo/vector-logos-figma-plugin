figma.showUI(__html__, { height: 400, width: 460 });

// message contains the svg as text and the name
figma.ui.onmessage = async ({ logoText, name }) => {
  // create the svg from text and attempt to position in screen
  const svg = figma.createNodeFromSvg(logoText);
  svg.name = name;

  // Resize to 48px height while maintaining aspect ratio
  const scale = 48 / svg.height;
  svg.resize(svg.width * scale, 48);

  // Center the logo in the viewport
  svg.x = figma.viewport.center.x - svg.width / 2;
  svg.y = figma.viewport.center.y - svg.height / 2;

  // select and scroll into view, sometimes this doesn't
  // work so well and i'm not sure why
  figma.currentPage.selection = [svg];
  figma.viewport.scrollAndZoomIntoView([svg]);

  //figma.closePlugin();
};
