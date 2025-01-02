from alembic import op
import sqlalchemy as sa

# revision identifiers, used by Alembic.
revision = '49381c8af834'
down_revision = None
branch_labels = None
depends_on = None

def upgrade():
    op.create_table(
        'users',
        sa.Column('id', sa.Integer, primary_key=True),
        sa.Column('username', sa.String, unique=True, nullable=False),
        sa.Column('email', sa.String, unique=True, nullable=False),
        sa.Column('hashed_password', sa.String, nullable=False),
        sa.Column('full_name', sa.String, nullable=True),
    )

def downgrade():
    op.drop_table('users')