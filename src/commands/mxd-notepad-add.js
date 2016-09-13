module.exports = ({ heimdall }) => async ({ args, heimdallLoggedin, reply }) => {
  const { session } = await heimdallLoggedin();
  await heimdall.request(`mxd/notepad/${session.customer.customerId}`, {
    body: { contentId: args },
    headers: { 'mxd-session': session.sessionId },
    method: 'post'
  });
  reply.send(`added asset with id "${args}" to the notepad`);
};
