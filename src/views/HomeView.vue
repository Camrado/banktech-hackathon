<template>
  <header class="home-header">
    <div>
      <img src="../assets/profile-photo.svg" alt="Profile Photo" class="profile-photo" />
      <span>Kamal</span>
    </div>

    <div>
      <img src="../assets/eye-icon.png" alt="Hide Details Icon" />
      <img src="../assets/notification-icon.png" alt="Notification Icon" />
    </div>
  </header>

  <article class="cards-section">
    <h1>Kartlar</h1>
    <div class="cards-section__cards">
      <div class="cards-section__card">
        <img src="../assets/visa-card.jpg" alt="Visa Card" />
        <div>
          <p>1 234.50 AZN</p>
          <p>9999 • Debet</p>
        </div>
      </div>
      <div class="cards-section__card">
        <img src="../assets/mastercard-card.jpg" alt="Mastercard Card" />
        <div>
          <p>34.50 AZN</p>
          <p>8888 • Debet</p>
        </div>
      </div>
    </div>
  </article>

  <article class="home-tasks">
    <h1>Tasks</h1>
    <div>
      <RouterLink to="/tasks">Go to <span>Tasks</span> <img src="../assets/arrow-right.png" alt="Arrow Forward" /></RouterLink>
    </div>
  </article>

  <article class="new-info">
    <h1>Yeniliklər 🔥</h1>
    <div class="new-info__cards">
      <img src="../assets/yenilikler-img1.png" alt="Yeniliker 1" />
      <img src="../assets/yenilikler-img2.jpg" alt="Yeniliker 2" />
    </div>
  </article>

  <article class="latest-transactions">
    <h1>Son ödəmələr</h1>
    <div class="latest-transactions__cards">
      <div class="latest-transactions__card">
        <img src="../assets/bakcell-logo.svg" alt="Bakcell Logo" />
        <p>Javidan</p>
        <p>055 000 00 00</p>
      </div>
      <div class="latest-transactions__card">
        <img src="../assets/bakcell-logo.svg" alt="Bakcell Logo" />
        <p>Novruz</p>
        <p>055 111 11 11</p>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style>
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
  width: 50px !important;
  height: 50px !important;
}
.home-header div span {
  margin-left: 10px;
  font-size: 1.7em;
  font-weight: 800;
  color: #333;
}
.home-header div {
  display: flex;
  align-items: center;
}
.home-header img:nth-child(1) {
  width: 30px;
  height: 30px;
  margin-right: 10px;
}
.home-header img:nth-child(2) {
  width: 25px;
  height: 25px;
}
.home-header img {
  cursor: pointer;
}

article.cards-section {
  margin-top: 50px;
}

article.cards-section h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 500;
}

article.cards-section .cards-section__cards {
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

article.cards-section .cards-section__cards .cards-section__card {
  padding: 0 10px;
  display: flex;
  align-items: center;
}

article.cards-section .cards-section__cards .cards-section__card img {
  height: 50px;
  margin-right: 15px;
}

article.cards-section .cards-section__cards .cards-section__card div {
  display: flex;
  flex-direction: column;
}

article.cards-section .cards-section__cards .cards-section__card div p:nth-child(1) {
  margin: 15px 0 7px 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
}

article.cards-section .cards-section__cards .cards-section__card div p:nth-child(2) {
  margin-top: 0;
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
}

article.home-tasks {
  margin-top: 50px;
}

article.home-tasks h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 500;
}

article.home-tasks div {
  display: flex;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

article.home-tasks div a {
  text-align: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  text-decoration: none;
  color: #099a71;
  font-family: 'Roboto', sans-serif;
  font-size: 20px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
}

article.home-tasks div a span {
  margin-left: 5px;
  color: #950a23;
}

article.home-tasks div a img {
  width: 20px;
  height: 20px;
  margin-left: 5px;
}

article.new-info {
  margin-top: 70px;
}

article.new-info h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 500;
}

article.new-info .new-info__cards {
  display: flex;
  align-items: center;
}

article.new-info .new-info__cards img {
  width: 160px;
  height: 200px;
  margin-right: 20px;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.latest-transactions {
  margin-top: 70px;
}

.latest-transactions h1 {
  font-family: 'Roboto', sans-serif;
  font-size: 28px;
  font-weight: 500;
}

.latest-transactions .latest-transactions__cards {
  display: flex;
  align-items: center;
}

.latest-transactions .latest-transactions__cards .latest-transactions__card {
  width: 160px;
  height: 200px;
  margin-right: 20px;
  border-radius: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 10px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.latest-transactions .latest-transactions__cards .latest-transactions__card img {
  width: 50px;
  height: 50px;
  margin: 10px 0;
}

.latest-transactions .latest-transactions__cards .latest-transactions__card p:nth-child(2) {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  margin-top: 30px;
  margin-bottom: 7px;
}

.latest-transactions .latest-transactions__cards .latest-transactions__card p:nth-child(3) {
  font-family: 'Roboto', sans-serif;
  font-weight: 300;
  margin: 0;
}
</style>
