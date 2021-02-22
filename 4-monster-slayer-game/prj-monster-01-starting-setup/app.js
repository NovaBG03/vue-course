function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const app = Vue.createApp({
  data() {
    return {
      playerMaxHealth: 100,
      monsterMaxHealth: 100,
      playerHealth: 100,
      monsterHealth: 100,
      currentRound: 0,
      winner: null,
      logMessages: []
    };
  },
  computed: {
    monsterHealthBarStyle() {
      if (this.monsterHealth <= 0) {
        return { width: 0 };
      }
      return { width: this.monsterHealth / this.monsterMaxHealth * 100 + "%" };
    },
    playerHealthBarStyle() {
      if (this.playerHealth <= 0) {
        return { width: 0 };
      }
      return { width: this.playerHealth / this.playerMaxHealth * 100 + "%" };
    },
    isSpecialAttackDisabled() {
      return this.currentRound % 3 != 0;
    }
  },
  watch: {
    playerHealth(health) {
      if (health <= 0) {
        this.winner = 'monster';
      }
    },
    monsterHealth(health) {
      if (health <= 0) {
        if (this.playerHealth <= 0) {
          this.winner = 'draw';
        } else {
          this.winner = 'player';
        }
      }
    }
  },
  methods: {
    startGame() {
      this.playerHealth = this.playerMaxHealth;
      this.monsterHealth = this.monsterMaxHealth;
      this.currentRound = 0;
      this.winner = null;
      this.logMessages = [];
    },
    attackMonster() {
      this.currentRound++;
      const playerDamage = getRandomNumber(7, 12);
      this.monsterHealth -= playerDamage;
      this.logMessage('player', 'attack', playerDamage);
      this.attackPlayer();
    },
    attackPlayer() {
      const monsterDamage = getRandomNumber(8, 15);
      this.playerHealth -= monsterDamage;
      this.logMessage('monster', 'attack', monsterDamage);
    },
    specialAttackMonster() {
      this.currentRound++;
      const playerDamage = getRandomNumber(10, 25);
      this.monsterHealth -= playerDamage;
      this.logMessage('player', 'attack', playerDamage);
      this.attackPlayer();
    },
    healPlayer() {
      this.currentRound++;
      const health = getRandomNumber(10, 20);
      if (this.playerHealth + health > this.playerMaxHealth) {
        this.logMessage('player', 'heal', this.playerMaxHealth - this.playerHealth);
        this.playerHealth = this.playerMaxHealth;
      } else {
        this.logMessage('player', 'heal', health);
        this.playerHealth += health;
      }
      this.attackPlayer();
    },
    surrender() {
      this.winner = 'monster';
    },
    logMessage(who, what, value) { 
      this.logMessages.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      });
    }
  },
});

app.mount("#game");
