// Function is later referenced with this name
const helloWorldFn = async (context, event) => {
    const apiToken = await context.secrets.get('API_TOKEN')
    // Log so we can later see what's available in payload
    console.log(event);
  
    // Project storage is accessed through context
    // Fetch already saved transactions under HELLO_WORLD/TXS key
    const storedTxs = await context.storage.getJson('HELLO_WORLD/TXS');
    if (!storedTxs['txs']) {
      // Create new list if first
      storedTxs['txs'] = [event.hash];
    } else {
      // Otherwise append
      storedTxs['txs'].push(event.hash);
    }
    // Write to storage - don't forget the await!
    await context.storage.putJson('HELLO_WORLD/TXS', storedTxs);
  };
  // Function must be exported
  module.exports = { helloWorldFn };