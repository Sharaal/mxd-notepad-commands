module.exports = ({ heimdall }) => async ({ args, heimdallLoggedin, reply }) => {
  const { session } = await heimdallLoggedin();
  await heimdall.post(`mxd/notepad/${session.customer.customerId}`, {
    body: { contentId: args },
    headers: { 'mxd-session': session.sessionId }
  });
  reply.send(`added asset with id "${args}" to the notepad`);
};
