export function findByEmail(email, cb) {
  return this.findOne({ email }, cb);
}
