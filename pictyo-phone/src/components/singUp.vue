<template>
    <div id="sing-up">
        <form>
            <ul>
                <li>
                    <label for="mail">Email: </label>
                    <input type="text" id="mail" name="mail" required>
                </li>
                <li>
                    <label for="name">Username: </label>
                    <input type="text" id="name" name="name" required>
                </li>
                <li>
                    <label for="pass">Password: </label>
                    <input type="password" id="pass" name="pass" required>
                </li>
                <li>
                    <label for="C-pass">Confirm Password: </label>
                    <input type="password" id="C-pass" name="C-pass" required>
                </li>
                <li>
                    <button type="button" id="boton" value="save">Sign in</button>
                </li>

            </ul>
            <router-link to="./">Back</router-link>
        </form>
    </div>
</template>

<script>
export default {
    name: 'singUp',
    props: {
        msg: String
    }
};
</script>
