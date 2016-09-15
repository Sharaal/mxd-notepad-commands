module.exports = ({ heimdall }) => async ({ args, heimdallLoggedin, reply }) => {
  const { session } = await heimdallLoggedin();
  await heimdall.delete(`mxd/notepad/${session.customer.customerId}/content/${encodeURIComponent(args)}`, {
    headers: { 'mxd-session': session.sessionId }
  });
  reply.send(`removed asset with id "${args}" from the notepad`);
};
