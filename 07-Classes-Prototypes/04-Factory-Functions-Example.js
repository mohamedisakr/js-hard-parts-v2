function createUser(name, score) {
  return {
    name,
    score,
    inc() {
      this.score++;
    }
  };
}
