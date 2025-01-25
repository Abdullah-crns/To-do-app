# 🌟 Task Management App 🌟
Welcome to the Task Management App! This project is a simple and efficient way to manage your daily tasks 📝, built with React.js and styled with custom CSS 🎨. Add tasks, set due dates, highlight important ones, and stay on top of your schedule! 🚀<br>

#✨ Features<br>
✅ Add Tasks<br>

Type in a task description 🖋️ and pick a due date 📅.<br>
Add tasks by clicking the ADD button or pressing the Enter key ⌨️.<br>
✅ View Tasks<br>

See your tasks 📝 and their due dates neatly listed.<br>
Click on a task to highlight it 🌟 (mark it as important!).<br>
✅ Delete Tasks<br>

Remove tasks 🗑️ when you're done with them.<br>
✅ Keyboard Support<br>

Add tasks quickly by pressing Enter ⌨️.<br>

# 🛠️ Technologies Used
# Frontend

⚛️ React.js: Powers the dynamic interface and state management.<br>
🎨 CSS: For custom styling and layout design.<br>

# 🚀 How to Run the Project
📥 Clone the Repository <br>
git clone https://github.com/spectre-0037/To-do-app.git<br>
cd To-do-app<br>

# 📦 Install Dependencies
npm install <br>

# ▶️ Run the Application
npm run dev <br>

# 📂 Project Structure

# 🧠 Code Breakdown<br>
# State Management 🗂️
The app uses useState to manage:<br>

items: List of tasks 📝.<br>
dates: List of due dates 📅 corresponding to the tasks.<br>
selected: Index of the currently highlighted task ✨.<br>
inputValue & inputValue2: Controlled inputs for task description and due date.<br>
# Core Functions 🔧<br>
Adding a Task ➕<br>

handleAddItem: Adds a task and its date if both fields are filled out.<br>
Deleting a Task ❌<br>

handleDelete: Removes a task and its date by index.<br>
Highlighting a Task 🌟<br>

handleSelect: Toggles the "selected" state of a task.<br>
Input Handling ✍️<br>

handleKeyDown: Allows tasks to be added with the Enter key ⌨️.<br>
handleOnChange & handleOnChangeDate: Manage input values for task and date.<br>
# 🎨 Styling
Custom CSS<br>
The app is styled using MainBody.css. Key highlights:<br>

🖼️ Neat and user-friendly layout.<br>
🌟 Highlight effect for selected tasks (class: selected).<br>
✨ Styled buttons, inputs, and task list for a clean aesthetic.<br>
# 🚀 Future Improvements<br>
✨ Persistent Storage: Save tasks in localStorage or a database for long-term usage.<br>

✨ Task Prioritization: Allow users to set priority levels (e.g., High 🔴, Medium 🟠, Low 🟢).<br>

✨ Responsive Design: Ensure a seamless experience on mobile devices 📱.<br>

✨ Filter & Search: Add options to filter tasks by due date 📅 or search 🔍 by keywords.<br>

✨ Enhanced UI/UX: Introduce animations 💫, icons 🎨, and better layouts.<br>

# 📜 License
This project is licensed under the github License. 📄 Feel free to use, modify, and distribute the code.<br>

# 📞 Contact
www.abdullahbinzubair.live<br>

# 📧 Email: abdullah@abdullahbinzubair.com<br>
# 🐙 GitHub: spectre0037 + abdullah-crns<br>
# website : www.abdullahbinzubair.live<br>

🎉 Thank you for using the Task Management App! Manage your tasks effortlessly and stay productive. 💪✨
