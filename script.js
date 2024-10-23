const apiUrl = "https://raw.githubusercontent.com/Anneversleep05/Demoder/refs/heads/main/TaskEveryDay.json";

fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const videoContainer = document.getElementById("video-container");
    videoContainer.innerHTML = `<iframe width="100%" height="220" src="${data.url_guide_video}" frameborder="" allowfullscreen></iframe>`;

    const taskList = document.getElementById("tasks");
    data.list_task_day.forEach(task => {
      const li = document.createElement("li");
      li.innerHTML = `<h4>${task.title_task}</h4>`;
      li.addEventListener("click", () => {
        window.location.href = task.url_task; 
      });
      taskList.appendChild(li);
    });
  })
  .catch(error => {});