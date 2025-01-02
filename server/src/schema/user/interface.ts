import { Schema, Document } from 'mongoose'

export interface IUser extends Document {
    email: string
    authentication: {
        password: string
        mfa: {
            enabled: boolean
            secrect: string
            backupCodes: string
            isVerified: boolean
        }
        security: {
            loginAttempts: number
            failedLoginAttempts: number
            passwordHistory: []
            session: []
            refreshToken: string
            accessToken: string
        }
    }
    profile: {
        firstName: string
        lastName: string
        title: string
        department: string
        reportTo: string
        dateOfBirth: Date
        avatar: string
    }
    contact: {
        phone: string
        alternativePhone: string
        alternativeEmail: string
        address: {
            adderss: string
            landmark: string
            post: string
            city: string
            state: string
            country: string
        }
    }
    preferences: {
        notifications: {
            email: boolean
            tasks: boolean
            mention: boolean
            update: boolean
        }
        theme: string
        dashboardLayout: string
    }
    systemMetaDate: {
        createdAt: Date
        updatedAt: Date
        lastLogin: Date
        lastActiveAt: Date
        deletionSchedule: Date
    }
    subscription: {
        subscriptionId: Schema.Types.ObjectId
        subscriptionStatus: boolean
        billingCycle: string
        paymentMode: string
        billingInformation: {
            currency: string
            billingTo: {
                name: string
                email: string
                address: {
                    adderss: string
                    landmark: string
                    post: string
                    city: string
                    state: string
                    country: string
                }
            }
            billingFrom: {
                name: string
                email: string
                address: {
                    adderss: string
                    landmark: string
                    post: string
                    city: string
                    state: string
                    country: string
                }
            }
        }
        usage: {
            currnetUsers: number
            storageUsed: number
        }
    }
}
