import { defineStorage } from '@aws-amplify/backend';

export const storage = defineStorage({
  name: 'notes-images',
  access: (allow) => ({
    // public files: anyone can read; signed-in users can write/delete
    'public/*': [
      allow.guest.to(['read']),
      allow.authenticated.to(['read', 'write', 'delete']),
    ],
  }),
});

