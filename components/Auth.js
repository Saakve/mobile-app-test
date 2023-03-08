import React, { useState } from "react"
import { Alert, StyleSheet, View } from "react-native"
import { supabase } from "../helper"
import { Button, Input } from "react-native-elements"

export default function Auth() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    const singInWithEmail = async () => {
        setLoading(true)
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password
        })

        if (error) Alert.alert(error.message)
        setLoading(false)
    }

    const singUpWithEmail = async () => {
        setLoading(true)
        const { error } = await supabase.auth.signUp({email, password})

        if (error) Alert.alert(error.message)
        setLoading(false)
    }

    return (
        <View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Input
                  label='Email'
                  leftIcon={{type: 'font-awesome', name: 'envelope'}}
                  onChangeText={text => setEmail(text)}
                  value={email}
                  placeholder='example@mail.com'
                  autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <Input
                  label='Password'
                  leftIcon={{type: 'font-awesome', name: 'lock'}}
                  onChangeText={text => setPassword(text)}
                  value={password}
                  placeholder='Password'
                  autoCapitalize={'none'}
                  secureTextEntry={true}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Button title='Sign in' disabled={loading} onPress={() => singInWithEmail()}/>
            </View>
            <View style={[styles.verticallySpaced]}>
                <Button title='Sign up' disabled={loading} onPress={() => singUpWithEmail()}/>
            </View>  
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        margintTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        margintTop: 20,
    },
})