import { Schema, model } from 'mongoose';
import { IUser } from './interface';

const UserSchema = new Schema<IUser>({
  
  email: { type: String, required: true, unique: true },
  authentication: {
    password: { type: String, required: true },
    mfa: {
      enabled: { type: Boolean, default: false },
      secrect: { type: String, default: '' },
      backupCodes: { type: String, default: '' },
      isVerified: { type: Boolean, default: false },
    },
    security: {
      loginAttempts: { type: Number, default: 0 },
      failedLoginAttempts: { type: Number, default: 0 },
      passwordHistory: { type: [String], default: [] },
      session: { type: [String], default: [] },
      refreshToken: { type: String, default: '' },
      accessToken: { type: String, default: '' },
    },
  },
  profile: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    title: { type: String, default: '' },
    department: { type: String, default: '' },
    reportTo: { type: String, default: '' },
    dateOfBirth: { type: Date },
    avatar: { type: String, default: '' },
  },
  contact: {
    phone: { type: String, default: '' },
    alternativePhone: { type: String, default: '' },
    alternativeEmail: { type: String, default: '' },
    address: {
      adderss: { type: String, default: '' },
      landmark: { type: String, default: '' },
      post: { type: String, default: '' },
      city: { type: String, default: '' },
      state: { type: String, default: '' },
      country: { type: String, default: '' },
    },
  },
  preferences: {
    notifications: {
      email: { type: Boolean, default: true },
      tasks: { type: Boolean, default: true },
      mention: { type: Boolean, default: true },
      update: { type: Boolean, default: true },
    },
    theme: { type: String, default: 'light' },
    dashboardLayout: { type: String, default: 'default' },
  },
  systemMetaDate: {
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    lastLogin: { type: Date },
    lastActiveAt: { type: Date },
    deletionSchedule: { type: Date },
  },
  subscription: {
    subscriptionId: { type: Schema.Types.ObjectId, ref: 'Subscription' },
    subscriptionStatus: { type: Boolean, default: false },
    billingCycle: { type: String, default: '' },
    paymentMode: { type: String, default: '' },
    billingInformation: {
      currency: { type: String, default: '' },
      billingTo: {
        name: { type: String, default: '' },
        email: { type: String, default: '' },
        address: {
          adderss: { type: String, default: '' },
          landmark: { type: String, default: '' },
          post: { type: String, default: '' },
          city: { type: String, default: '' },
          state: { type: String, default: '' },
          country: { type: String, default: '' },
        },
      },
      billingFrom: {
        name: { type: String, default: '' },
        email: { type: String, default: '' },
        address: {
          adderss: { type: String, default: '' },
          landmark: { type: String, default: '' },
          post: { type: String, default: '' },
          city: { type: String, default: '' },
          state: { type: String, default: '' },
          country: { type: String, default: '' },
        },
      },
    },
    usage: {
      currnetUsers: { type: Number, default: 0 },
      storageUsed: { type: Number, default: 0 },
    },
  },
});

const Users = model <IUser> ('Users', UserSchema);

export default Users;