import {
  type RouteConfigEntry,
  index,
  route,
} from "@react-router/dev/routes";

// Use Vite's import.meta.glob to discover all page files at build time.
// This is much more robust for production builds on Vercel than manual filesystem scanning.
const pageFiles = import.meta.glob("./**/page.jsx", { eager: true });

function getRoutesFromGlob(): RouteConfigEntry[] {
  const routes: RouteConfigEntry[] = [];

  // Sort paths to ensure proper nesting/precedence if needed
  const paths = Object.keys(pageFiles).sort();

  for (const filePath of paths) {
    // Convert filePath (e.g., "./about/page.jsx") to route path (e.g., "about")
    // Note: The glob starts from the current directory (src/app/)
    let routePath = filePath
      .replace("./", "") // Remove leading ./
      .replace("/page.jsx", "") // Remove trailing /page.jsx
      .replace("page.jsx", ""); // Handle root page.jsx

    if (routePath === "") {
      // Root index route
      routes.push(index("./page.jsx"));
    } else {
      // Process parameter segments (e.g., [id] -> :id)
      const segments = routePath.split("/");
      const processedSegments = segments.map((segment) => {
        if (segment.startsWith("[") && segment.endsWith("]")) {
          const paramName = segment.slice(1, -1);

          // Handle catch-all parameters (e.g., [...ids] becomes *)
          if (paramName.startsWith("...")) {
            return "*";
          }
          // Handle optional parameters (e.g., [[id]] becomes :id?)
          if (paramName.startsWith("[") && paramName.endsWith("]")) {
            return `:${paramName.slice(1, -1)}?`;
          }
          // Handle regular parameters (e.g., [id] becomes :id)
          return `:${paramName}`;
        }
        return segment;
      });

      routePath = processedSegments.join("/");
      routes.push(route(routePath, `./${routePath}/page.jsx`));
    }
  }

  return routes;
}

const routes = [
  ...getRoutesFromGlob(),
  route("*?", "./__create/not-found.tsx"),
];

export default routes;
