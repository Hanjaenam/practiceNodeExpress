export function findByEmail(email, cb) {
  return this.find({ email }, cb);
}
