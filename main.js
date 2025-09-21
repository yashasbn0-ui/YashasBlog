const blogData = {
  posts: [
    {
      href: "emulator-tweaks/",
      icon: "game-controller.png",
      alt: "Game controller icon",
      title: "Emulator Tweaks & Game Mods",
      description: "Exploring BUSSID modding and emulator settings has been a blast. Click to read more.",
      class: "border-blue"
    },
    {
      href: "web-dev-tips/",
      icon: "light-bulb.png",
      alt: "Light bulb icon",
      title: "Web Dev Tips",
      description: "Semantic HTML, clean CSS, and accessible design — here's how I keep my code maintainable and inclusive.",
      class: "border-green"
    },
    {
      href: "modding-bussid/",
      icon: "bussid.jpg",
      alt: "BUSSID modding illustration",
      title: "Modding BUSSID on PC",
      description: "Explore emulator tricks for unrestricted modding. Click to reveal full guide.",
      class: "border-yellow"
    }
  ],
  about: {
    content: "Hi, I'm Yashas! I love modding games, tweaking emulators, and building clean, accessible web interfaces."
  }
};
document.querySelector('a[href="about"]').addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("index.html").style.display = "none";
  document.getElementById("about").style.display = "block";
});
document.addEventListener("DOMContentLoaded", () => {
  const postsContainer = document.getElementById("blog-posts");
  blogData.posts.forEach(post => {
    const postEl = document.createElement("a");
    postEl.href = post.href;
    postEl.className = `post-card ${post.class}`;
    postEl.innerHTML = `
      <div class="post-icon">
        <img src="${post.icon}" alt="${post.alt}" />
      </div>
      <h3 class="post-title">${post.title}</h3>
      <p class="post-description">${post.description}</p>
    `;
    postsContainer.appendChild(postEl);
  });

  const aboutSection = document.getElementById("about");
  const aboutParagraph = aboutSection.querySelector("p");
  aboutParagraph.textContent = blogData.about.content;

  // ✅ Dark mode toggle
  const toggleBtn = document.getElementById("darkModeToggle");
  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    document.body.classList.toggle("light-mode");
  });
});

