module.exports = ({ heimdall }) => async ({ args, heimdallLoggedin, reply }) => {
  const { session } = await heimdallLoggedin();
  await heimdall.request(`mxd/notepad/${session.customer.customerId}/content/${encodeURIComponent(args)}`, {
    headers: { 'mxd-session': session.sessionId },
    method: 'delete'
  });
  reply.send(`removed asset with id "${args}" from the notepad`);
};
