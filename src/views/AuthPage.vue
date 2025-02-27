<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useAccountStore } from '@/stores/account';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const router = useRouter();
const accountStore = useAccountStore();

const email = ref('');
const password = ref('');
const newEmail = ref('');
const newPassword = ref('');

/**
 * This handle manages the login state of the app.
 * we imported the accountStore here, which handles the API calls
 * as well as all the storage and global states.
 *
 * We implemented login there, which requires an email and password.
 * If the Promise resolves successfully, we 'push' /main to the router.
 * This routes to the "/main" page. Check the router to see how "simple" that works.
 */
const handleLogin = async () => {
  try {
    await accountStore.login(email.value, password.value); // Call the login API
    await router.push('/main'); // Redirect to /main on success
  } catch (error) {
    alert('Failed to login. Please try again.');
  }
};

const handleCreateAccount = async () => {
  try {
    await accountStore.createAccount(newEmail.value, newPassword.value);
    await router.push('/account/create'); // Redirect to /account/create on success
  } catch (error) {
    alert('Failed to create account. Please try again.');
  }
};
</script>


<template>
  <div class="flex items-center justify-center h-screen bg-gradient-to-br from-green-100 via-white to-blue-100">
    <Tabs default-value="login" class="w-[350px]">
      <TabsList class="flex justify-center w-full h-24 space-x-4 bg-transparent">
        <TabsTrigger value="login" class="bg-white border-b-2 size-1/2">
          Login
        </TabsTrigger>
        <TabsTrigger value="password" class="bg-white border-b-2 size-1/2">
          Create Account
        </TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <Card>
          <CardHeader>
            <CardTitle>Login</CardTitle>
            <CardDescription>
              Login to your existing account. <br> Select "Create Account" to create a new account.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="email">Email</Label>
              <Input id="email" type="email" v-model="email" />
            </div>
            <div class="space-y-1">
              <Label for="password">Password</Label>
              <Input id="password" type="password" v-model="password" />
            </div>
          </CardContent>
          <CardFooter>
            <Button @click="handleLogin">Login</Button>
          </CardFooter>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Create New Account</CardTitle>
            <CardDescription>
              Nice to meet you. Let's create your account.
            </CardDescription>
          </CardHeader>
          <CardContent class="space-y-2">
            <div class="space-y-1">
              <Label for="new-email">Email</Label>
              <Input id="new-email" type="email" v-model="newEmail" />
            </div>
            <div class="space-y-1">
              <Label for="new-password">Password</Label>
              <Input id="new-password" type="password" v-model="newPassword" />
            </div>
          </CardContent>
          <CardFooter>
            <Button @click="handleCreateAccount">Create Account</Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  </div>
</template>
