# 💸 Eat-'N-Split

**Eat-'N-Split** is a modern, interactive web application designed to simplify the process of splitting bills with friends. No more mental math or awkward calculations—track who owes whom in real-time with a clean, user-friendly interface.



---

## ✨ Key Features

* **Dynamic Friend Management:** Add new friends with custom avatars (using Pravatar API).
* **Intelligent Bill Splitting:** Calculate expenses between you and a selected friend instantly.
* **Balance Tracking:** Visual indicators (Red/Green colors) to show if you owe money or are owed.
* **Smart Validation:** Real-time logic to prevent entering expenses higher than the total bill.
* **Responsive UI:** Optimized for both desktop and mobile viewing.
* **Modern React Patterns:** Utilizes `useState`, Lifting State Up, and controlled components.

---

## 🛠️ Built With

* **React.js** - UI Library.
* **JavaScript (ES6+)** - Logic and filtering.
* **CSS3** - Custom styling and animations.
* **Pravatar API** - For generating unique friend avatars.

---

## 🚀 Learning Outcomes (Technical Highlights)

This project was a deep dive into advanced React concepts:
- **Lifting State Up:** Managing shared state between `FriendsList`, `AddFriendForm`, and `SplitBillForm`.
- **Conditional Rendering:** Showing/hiding forms based on user interaction.
- **Array Manipulation:** Using `.map()` to update specific objects within an array immutably.
- **Defensive Programming:** Using Optional Chaining (`?.`) and input sanitization to prevent runtime errors.

---

## 🔧 Installation & Setup

1. Clone the repository:
   ```bash
   git clone [https://github.com/elnakhlawi/-Eat--N-Split](https://github.com/elnakhlawi/-Eat--N-Split.git)