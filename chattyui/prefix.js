function prefix(str) {
  return str
    .split(" ")
    .map((cl) => {
      if (cl.indexOf(":") == -1) {
        return "stb-" + cl;
      } else {
        const parts = cl.split(":");
        parts[parts.length - 1] = "stb-" + parts[parts.length - 1];
        return parts.join(":");
      }
    })
    .join(" ");
}
