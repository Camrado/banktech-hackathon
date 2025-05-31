<template>
  <div class="leaderboard-container">
    <header class="leaderboard-topbar">
      <div class="back-icon">
        <img src="../assets/arrow-back.png" alt="Back" @click="$router.back()" />
      </div>
      <h2>Leaderboard</h2>
      <div class="refresh-icon">
        <img src="../assets/refresh-icon.png" alt="Refresh" />
      </div>
    </header>

    <section class="current-user-header">
      <div class="user-card">
        <img :src="currentUser.avatar" alt="Your Avatar" class="user-avatar" />
        <div class="user-info">
          <span class="user-name">{{ currentUser.name }}</span>
          <span class="user-rank">Rank {{ currentUser.rank }}</span>
        </div>
        <div class="user-level">
          <span>Level {{ currentUser.level }}</span>
        </div>
      </div>
    </section>

    <section class="leaderboard-list">
      <div v-for="(entry, index) in entries" :key="index" class="entry-row">
        <!-- Medal / Placeholder -->
        <div class="medal-cell">
          <span v-if="entry.medal" class="medal">{{ entry.medal }}</span>
          <span v-else class="medal-placeholder"></span>
        </div>

        <div class="avatar-name-cell">
          <img :src="entry.avatar" alt="Avatar" class="entry-avatar" />
          <span class="entry-name">{{ entry.name }}</span>
        </div>

        <div class="level-cell">
          <span>Level {{ entry.level }}</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'LeaderboardView',

  data() {
    return {
      currentUser: {
        name: 'Kamal',
        avatar: require('../assets/profile-photo.svg'),
        rank: null,
        level: 7
      },

      entries: []
    };
  },
  created() {
    const businesses = [
      {
        name: 'Lily James',
        level: 15,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Lily%20James'
      },
      {
        name: 'Mike Santiago',
        level: 13,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Mike%20Santiago'
      },
      {
        name: 'Rodney Holmes',
        level: 12,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Rodney%20Holmes'
      },
      {
        name: 'Nicholas Russell',
        level: 11,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Nicholas%20Russell'
      },
      {
        name: 'Devin Lane',
        level: 10,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Devin%20Lane'
      },
      {
        name: 'Mary Gardner',
        level: 10,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Mary%20Gardner'
      },
      {
        name: 'Carlos Rivera',
        level: 9,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Carlos%20Rivera'
      },
      {
        name: 'Priya Sharma',
        level: 9,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Priya%20Sharma'
      },
      {
        name: 'Aiko Tanaka',
        level: 8,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Aiko%20Tanaka'
      },
      {
        name: 'Omar Khalid',
        level: 8,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Omar%20Khalid'
      },
      {
        name: this.currentUser.name,
        level: this.currentUser.level,
        avatar: this.currentUser.avatar // Current user
      },
      {
        name: 'Jin Woo Park',
        level: 6,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Jin%20Woo%20Park'
      },
      {
        name: 'Sofia Rossi',
        level: 5,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Sofia%20Rossi'
      },
      {
        name: 'Diego Martínez',
        level: 5,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Diego%20Martínez'
      },
      {
        name: 'Ana Silva',
        level: 5,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Ana%20Silva'
      },
      {
        name: 'Lucas Müller',
        level: 4,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Lucas%20Müller'
      },
      {
        name: 'Fatima Ibrahim',
        level: 3,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Fatima%20Ibrahim'
      },
      {
        name: 'Jamal Thompson',
        level: 2,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Jamal%20Thompson'
      },
      {
        name: 'Yuki Nakamura',
        level: 2,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Yuki%20Nakamura'
      },
      {
        name: 'Olivia Johnson',
        level: 1,
        avatar: 'https://api.dicebear.com/7.x/thumbs/svg?seed=Olivia%20Johnson'
      }
    ];

    const getMedalByRank = (rank) => {
      if (rank >= 1 && rank <= 4) return '🥇';
      if (rank >= 5 && rank <= 8) return '🥈';
      if (rank >= 9 && rank <= 12) return '🥉';
      return rank;
    };

    businesses.sort((a, b) => b.level - a.level);

    for (let i = 0; i < businesses.length; i++) {
      if (businesses[i].name === this.currentUser.name) {
        this.currentUser.rank = i + 1;
      }

      this.entries.push({
        name: businesses[i].name,
        avatar: businesses[i].avatar,
        level: businesses[i].level,
        medal: getMedalByRank(i + 1)
      });
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');

.leaderboard-container {
  font-family: 'Roboto', sans-serif;
  background-color: #f5f7fa;
  min-height: 100vh;
  padding: 0 10px;
}

.leaderboard-topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;
}

.leaderboard-topbar .back-icon img,
.leaderboard-topbar .refresh-icon img {
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.leaderboard-topbar h2 {
  font-size: 20px;
  font-weight: 600;
  color: #004225;
  margin: 0;
}

.current-user-header {
  margin-top: 8px;
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  padding: 24px 16px;
}

.current-user-header .user-card {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.user-avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #e0e0e0;
  object-fit: cover;
  margin-right: 12px;
}

.user-info {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.user-name {
  font-size: 18px;
  font-weight: 700;
  color: #333;
  margin-bottom: 4px;
}

.user-rank {
  font-size: 14px;
  font-weight: 500;
  color: #666;
}

.user-level {
  font-size: 16px;
  font-weight: 600;
  color: #006748;
}

.leaderboard-list {
  margin-top: 20px;
}

.entry-row {
  background-color: #ffffff;
  border-radius: 12px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  padding: 12px 16px;
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}

.medal-cell {
  width: 32px;
  text-align: center;
  font-size: 20px;
}

.medal {
  display: inline-block;
}

.medal-placeholder {
  display: inline-block;
  width: 20px;
}

.avatar-name-cell {
  display: flex;
  align-items: center;
  flex: 1;
  margin-left: 8px;
}

.entry-avatar {
  width: 42px;
  height: 42px;
  border-radius: 50%;
  background-color: #e0e0e0;
  object-fit: cover;
  margin-right: 12px;
}

.entry-name {
  font-size: 16px;
  font-weight: 500;
  color: #333;
}

/* Level column */
.level-cell {
  font-size: 15px;
  font-weight: 600;
  color: #004225;
}
</style>
