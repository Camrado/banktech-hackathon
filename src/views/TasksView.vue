<template>
  <header class="home-header">
    <div>
      <img src="../assets/profile-photo.svg" alt="Profile Photo" class="profile-photo" />
      <div>
        <span>Kamal</span>
        <span>Member</span>
      </div>
    </div>

    <div>
      <img src="../assets/pasha-logo.png" alt="PAŞA Bank Logo" class="bank-logo" />
    </div>
  </header>

  <div class="header">
    <h1>Tasks list</h1>
    <div class="button-row">
      <RouterLink to="/leaderboard" class="ranking-btn btn">🏆 Leaderboard</RouterLink>
    </div>
  </div>

  <div class="level-section">
    <div class="level-info">
      <span>Level {{ level }}</span>
      <span>{{ progress }}%</span>
    </div>
    <div class="progress-bar">
      <div class="progress-fill" :style="{ width: progress + '%' }"></div>
    </div>
  </div>

  <!-- Tasks -->
  <div class="task-list">
    <div v-for="(task, index) in tasks" :key="index" class="task-card" :class="{ completed: task.completed }">
      <div class="task-header">
        <div class="task-icon">{{ task.icon }}</div>
        <div class="task-title">
          <h2>{{ task.title }}</h2>
          <p>{{ task.description }}</p>
        </div>
      </div>
      <div class="task-status">
        <span :class="{ done: task.completed }">
          {{ task.completed ? '✔ Completed' : 'In Progress...' }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TasksView',
  data() {
    return {
      level: 1,
      tasks: [
        {
          icon: '💳',
          title: 'Link Corporate Card',
          description: 'Connect your card to unlock rewards',
          completed: true
        },
        {
          icon: '💰',
          title: 'Spend 1,000 AZN',
          description: 'Hit your first spending milestone',
          completed: false
        },
        {
          icon: '📥',
          title: 'Take a Business Loan',
          description: 'Apply to boost your growth',
          completed: false
        },
        {
          icon: '📊',
          title: 'Make 5 Transactions',
          description: 'Complete 5 payments to advance',
          completed: true
        }
      ]
    };
  },
  computed: {
    progress() {
      const done = this.tasks.filter((task) => task.completed).length;
      return Math.round((done / this.tasks.length) * 100);
    },
    currentReward() {
      const rewards = ['5% Loan Discount', 'Priority Customer Support', 'Free POS Terminal', 'Cashback on Card'];
      return rewards[this.level - 1] || 'Mystery Bonus';
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap');

.home-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 5px;
}
.home-header .profile-photo {
  background-color: #e0e0e0;
  border-radius: 100%;
  width: 50px;
  height: 50px;
}
.home-header div div {
  display: flex;
  flex-direction: column;
  align-items: start;
}
.home-header div div span:nth-child(1) {
  font-size: 1.6em;
  font-weight: 800;
  color: #333;
}
.home-header div div span:nth-child(2) {
  font-size: 1.2em;
  font-weight: 400;
  color: #666;
}
.home-header div {
  display: flex;
  align-items: center;
}
.home-header img {
  width: 50px;
  height: 50px;
  cursor: pointer;
}

.header h1 {
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #004225;
  margin-top: 20px;
}

.button-row {
  display: flex;
  gap: 10px;
  flex-direction: column;
  margin-bottom: 18px;
}

.btn {
  padding: 12px;
  border: none;
  border-radius: 14px;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.25s ease;
  cursor: pointer;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.05);
}

.rewards-btn {
  background: linear-gradient(135deg, #c6f1db, #a5d6bd);
  color: #014d2b;
}

.ranking-btn {
  background: linear-gradient(135deg, #ffe8c7, #f6d49f);
  color: #8a5a00;
  text-align: center;
  text-decoration: none;
}

.level-section {
  background-color: #ffffff;
  border-radius: 16px;
  padding: 14px 16px;
  box-shadow: 0 1px 6px rgba(0, 66, 37, 0.08);
  margin-bottom: 20px;
}

.level-info {
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: 600;
  color: #004225;
  margin-bottom: 8px;
}

.reward-preview {
  font-size: 13px;
  font-weight: 500;
  color: #006748;
  margin-top: 10px;
  text-align: center;
}

.progress-bar {
  height: 10px;
  background-color: #dbece4;
  border-radius: 6px;
  overflow: hidden;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #007a3d, #00b86b);
  width: 0%;
  transition: width 0.4s ease;
}

.task-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.task-card {
  background-color: white;
  border-radius: 18px;
  padding: 16px;
  box-shadow: 0 2px 12px rgba(0, 66, 37, 0.08);
  display: flex;
  flex-direction: column;
  gap: 10px;
  opacity: 1;
  transition: transform 0.2s ease;
}

.task-card.completed {
  opacity: 0.7;
}

.task-header {
  display: flex;
  gap: 12px;
  align-items: center;
}

.task-icon {
  font-size: 28px;
  background-color: #e6f3ee;
  padding: 8px;
  border-radius: 12px;
}

.task-title h2 {
  font-size: 16px;
  font-weight: 600;
  margin: 0;
}

.task-title p {
  font-size: 13px;
  margin: 4px 0 0;
  color: #555;
}

.task-status {
  text-align: right;
  font-size: 13px;
  font-weight: 500;
}

.task-status .done {
  color: #00b86b;
}
</style>
